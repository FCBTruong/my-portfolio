import { useRef, useEffect, useState } from "react";

interface Obstacle {
  x: number;
  w: number;
  h: number;
  type: "cactus" | "bird";
}

export function RunnerGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const isRunningRef = useRef(true);
  const gameStateRef = useRef({
    playerY: 0,
    playerVy: 0,
    obstacles: [] as Obstacle[],
    score: 0,
    gameOver: false,
    started: false,
    spawnRate: 120,
    spawnTimer: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 140;

    const playerW = 16;
    const playerH = 24;
    const groundY = canvas.height - 30;
    const gravity = 0.5;
    const jumpPower = -10;
    const gameSpeed = 5;

    gameStateRef.current.playerY = groundY;

    // Read CSS variables once — canvas ctx doesn't support var() or color-mix()
    const cssVars = getComputedStyle(document.documentElement);
    const cAccent2 = cssVars.getPropertyValue("--accent-2").trim() || "#22d3ee";
    const cAccent  = cssVars.getPropertyValue("--accent").trim()   || "#4f46e5";
    const cBg      = cssVars.getPropertyValue("--bg").trim()       || "#0f172a";
    const cMuted   = cssVars.getPropertyValue("--muted").trim()    || "#94a3b8";
    const cBorder  = cssVars.getPropertyValue("--border").trim()   || "#334155";

    const doJump = () => {
      const state = gameStateRef.current;
      if (!state.started) {
        state.started = true;
        return;
      }
      if (!state.gameOver && state.playerY === groundY) {
        state.playerVy = jumpPower;
      }
    };

    const doRestart = () => {
      gameStateRef.current = {
        playerY: groundY,
        playerVy: 0,
        obstacles: [],
        score: 0,
        gameOver: false,
        started: true,
        spawnRate: 120,
        spawnTimer: 0,
      };
      setGameOver(false);
      setScore(0);
    };

    // Keydown only fires when canvas is focused — prevents page scroll
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (gameStateRef.current.gameOver) {
          doRestart();
        } else {
          doJump();
        }
      }
    };

    const handleClick = () => {
      canvas.focus();
      if (gameStateRef.current.gameOver) {
        doRestart();
      } else {
        doJump();
      }
    };

    canvas.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("click", handleClick);

    const drawIdleText = (text: string, sub?: string) => {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = cMuted;
      ctx.font = "bold 13px Oxanium";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width / 2, groundY - 20);
      if (sub) {
        ctx.font = "11px Inter";
        ctx.globalAlpha = 0.35;
        ctx.fillText(sub, canvas.width / 2, groundY - 4);
      }
      ctx.globalAlpha = 1;

    const animate = () => {
      if (!isRunningRef.current) return;

      const state = gameStateRef.current;

      // Clear transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (state.started && !state.gameOver) {
        // Physics
        state.playerVy += gravity;
        state.playerY += state.playerVy;

        if (state.playerY > groundY) { state.playerY = groundY; state.playerVy = 0; }
        if (state.playerY < 0) { state.playerY = 0; state.playerVy = 0; }

        // Spawn obstacles
        state.spawnTimer++;
        if (state.spawnTimer > state.spawnRate) {
          const type = Math.random() > 0.6 ? "bird" : "cactus";
          state.obstacles.push({
            x: canvas.width,
            w: type === "bird" ? 16 : 12,
            h: type === "bird" ? 12 : 24,
            type,
          });
          state.spawnTimer = 0;
          state.spawnRate = Math.max(60, state.spawnRate - 1);
        }

        state.obstacles = state.obstacles.filter((obs) => {
          obs.x -= gameSpeed;
          const playerX = 20;
          if (
            playerX < obs.x + obs.w &&
            playerX + playerW > obs.x &&
            state.playerY < groundY - obs.h + 6 &&
            state.playerY + playerH > groundY - obs.h
          ) {
            state.gameOver = true;
            setGameOver(true);
          }
          if (obs.x + obs.w < playerX && obs.x + obs.w > playerX - gameSpeed) {
            state.score += 1;
            setScore(state.score);
          }
          return obs.x > -obs.w;
        });
      }

      // Ground line
      ctx.strokeStyle = cBorder;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, groundY + playerH / 2);
      ctx.lineTo(canvas.width, groundY + playerH / 2);
      ctx.stroke();

      // Player
      const playerX = 20;
      ctx.globalAlpha = state.gameOver ? 0.35 : 1;
      ctx.fillStyle = cAccent2;
      ctx.fillRect(playerX, state.playerY, playerW, playerH);
      ctx.fillStyle = cBg;
      ctx.fillRect(playerX + 3, state.playerY + 5, 2, 2);
      ctx.fillRect(playerX + 10, state.playerY + 5, 2, 2);
      ctx.globalAlpha = 1;

      // Obstacles
      ctx.fillStyle = cAccent;
      state.obstacles.forEach((obs) => {
        if (obs.type === "cactus") {
          ctx.fillRect(obs.x, groundY - obs.h, obs.w, obs.h);
          ctx.fillRect(obs.x - 2, groundY - obs.h + 6, 2, 6);
          ctx.fillRect(obs.x + obs.w, groundY - obs.h + 10, 2, 6);
        } else {
          const by = groundY - obs.h - 14;
          ctx.fillRect(obs.x, by, obs.w, obs.h);
          const wf = Math.sin(Date.now() / 60) > 0 ? 1 : -1;
          ctx.fillRect(obs.x - 3, by + wf * 2, 3, 5);
          ctx.fillRect(obs.x + obs.w, by + wf * 2, 3, 5);
        }
      });

      // Score
      if (state.started) {
        ctx.fillStyle = cMuted;
        ctx.font = "bold 13px Oxanium";
        ctx.textAlign = "right";
        ctx.fillText(`${state.score}`, canvas.width - 10, 18);
      }

      // Idle / game over hint
      if (!state.started) {
        drawIdleText("Press Space or click to play");
      } else if (state.gameOver) {
        drawIdleText("GAME OVER", "Space / click to restart");
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isRunningRef.current = false;
      canvas.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="runnerGameWidget">
      <canvas
        ref={canvasRef}
        className="runnerGameCanvas"
        tabIndex={0}
        title="Click to focus then Space / Arrow Up to jump"
      />
    </div>
  );
}
