import { useRef, useEffect } from "react";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function BounceGame({ isOpen }: { isOpen: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const animationRef = useRef<number>();
  const isRunningRef = useRef(false);

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize with one ball
    ballsRef.current = [
      {
        x: width / 2,
        y: height / 3,
        vx: 2 + Math.random() * 2,
        vy: 0,
        r: 6,
      },
    ];

    isRunningRef.current = true;

    const gravity = 0.4;
    const friction = 0.99;
    const bounce = 0.8;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(6, 23, 80, 0.5)";
      ctx.fillRect(0, 0, width, height);

      // Update and draw balls
      ballsRef.current.forEach((ball) => {
        // Apply gravity
        ball.vy += gravity;

        // Apply friction
        ball.vx *= friction;
        ball.vy *= friction;

        // Update position
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Bounce off walls
        if (ball.x - ball.r < 0) {
          ball.x = ball.r;
          ball.vx *= -bounce;
        }
        if (ball.x + ball.r > width) {
          ball.x = width - ball.r;
          ball.vx *= -bounce;
        }

        // Bounce off floor/ceiling
        if (ball.y - ball.r < 0) {
          ball.y = ball.r;
          ball.vy *= -bounce;
        }
        if (ball.y + ball.r > height) {
          ball.y = height - ball.r;
          ball.vy *= -bounce;
        }

        // Draw ball with glow
        const gradient = ctx.createRadialGradient(
          ball.x,
          ball.y,
          0,
          ball.x,
          ball.y,
          ball.r
        );
        gradient.addColorStop(0, "rgba(34, 211, 238, 0.8)");
        gradient.addColorStop(1, "rgba(34, 211, 238, 0.2)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (isRunningRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create new ball at click position
      if (ballsRef.current.length < 8) {
        ballsRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6,
          r: 4 + Math.random() * 3,
        });
      }
    };

    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      ballsRef.current = [
        {
          x: width / 2,
          y: height / 3,
          vx: 2 + Math.random() * 2,
          vy: 0,
          r: 6,
        },
      ];
    };

    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("contextmenu", handleRightClick);

    animate();

    return () => {
      isRunningRef.current = false;
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("contextmenu", handleRightClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="bounceGameContainer">
      <canvas
        ref={canvasRef}
        className="bounceGameCanvas"
        title="Click to add balls • Right-click to reset"
      />
      <div className="bounceGameHint">
        Click: add ball • Right-click: reset
      </div>
    </div>
  );
}
