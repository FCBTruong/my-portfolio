import { useState, useEffect, useRef, useCallback } from "react";

// 50 symbols — enough for 10×10 (50 pairs)
const ALL_SYMBOLS = [
  "🎮", "🕹️", "🎯", "🎲", "🏆", "⚡", "💎", "🔮",
  "🚀", "🌟", "🔥", "🎪", "🎭", "🎨", "🦄", "🐉",
  "🌈", "🎵", "🎸", "🎺", "🎻", "🥁", "🎤", "🎧",
  "🍎", "🍊", "🍋", "🍇", "🍓", "🍒", "🥝", "🍑",
  "🌸", "🌺", "🌻", "🌹", "🌷", "🌿", "🍀", "🌙",
  "☀️", "⭐", "🌊", "❄️", "🦋", "🐝", "🦁", "🐯", "🎃", "🎄",
];

// Even square levels only
const LEVELS = [
  { n: 2, cols: 2, rows: 2, cell: 72 },
  { n: 4, cols: 4, rows: 4, cell: 62 },
  { n: 6, cols: 6, rows: 6, cell: 50 },
  { n: 8, cols: 8, rows: 8, cell: 38 },
  { n: 10, cols: 10, rows: 10, cell: 32 },
];

interface Card {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createDeck(pairs: number): Card[] {
  const symbols = ALL_SYMBOLS.slice(0, pairs);
  return shuffle(
    [...symbols, ...symbols].map((symbol, i) => ({
      id: i,
      symbol,
      isFlipped: false,
      isMatched: false,
    }))
  );
}

export function MemoryGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const level = LEVELS[levelIdx];
  const isLastLevel = levelIdx === LEVELS.length - 1;

  const [cards, setCards] = useState<Card[]>(() => createDeck((level.cols * level.rows) / 2));
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);
  const [locked, setLocked] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fireworksRef = useRef<HTMLCanvasElement>(null);
  const fwAnimRef = useRef<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    const Ctx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return null;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new Ctx();
    }
    if (audioCtxRef.current.state === "suspended") {
      void audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const playTone = useCallback((freq: number, duration: number, type: OscillatorType, gainLevel: number, delay = 0) => {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const startAt = ctx.currentTime + delay;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(gainLevel, startAt + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startAt);
    osc.stop(startAt + duration + 0.02);
  }, [getAudioCtx]);

  const playMatchSound = useCallback(() => {
    playTone(660, 0.12, "triangle", 0.05, 0);
    playTone(880, 0.12, "triangle", 0.04, 0.08);
  }, [playTone]);

  const playFlipSound = useCallback(() => {
    playTone(420, 0.05, "triangle", 0.018, 0);
  }, [playTone]);

  const playWinSound = useCallback(() => {
    playTone(523.25, 0.16, "sine", 0.06, 0);
    playTone(659.25, 0.16, "sine", 0.06, 0.12);
    playTone(783.99, 0.22, "sine", 0.07, 0.24);
  }, [playTone]);

  useEffect(() => {
    if (started && !won && cards.every((c) => c.isMatched)) setWon(true);
  }, [cards, started, won]);

  useEffect(() => {
    if (started && !won) {
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, won]);

  useEffect(() => {
    if (won) playWinSound();
  }, [won, playWinSound]);

  useEffect(() => {
    if (!won) return;
    const canvas = fireworksRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      r: number;
    }

    const particles: Particle[] = [];
    const colors = ["#22d3ee", "#7c3aed", "#f59e0b", "#10b981", "#ef4444", "#f472b6"];

    const burst = (x: number, y: number) => {
      for (let i = 0; i < 52; i++) {
        const angle = (Math.PI * 2 * i) / 52;
        const speed = 2 + Math.random() * 4.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          r: 2 + Math.random() * 2,
        });
      }
    };

    let launches = 0;
    const launchInterval = setInterval(() => {
      burst(canvas.width * (0.15 + Math.random() * 0.7), canvas.height * (0.1 + Math.random() * 0.55));
      if (++launches >= 7) clearInterval(launchInterval);
    }, 320);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.09;
        p.alpha -= 0.016;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      fwAnimRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      clearInterval(launchInterval);
      cancelAnimationFrame(fwAnimRef.current);
    };
  }, [won]);

  const goLevel = useCallback((idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const lv = LEVELS[idx];
    setLevelIdx(idx);
    setCards(createDeck((lv.cols * lv.rows) / 2));
    setSelected([]);
    setMoves(0);
    setTime(0);
    setStarted(false);
    setWon(false);
    setLocked(false);
  }, []);

  const handleCardClick = useCallback(
    (id: number) => {
      const card = cards.find((c) => c.id === id);
      if (!card || card.isFlipped || card.isMatched || locked) return;

      if (!started) setStarted(true);
      playFlipSound();

      setCards((prev) => prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c)));

      if (selected.length === 0) {
        setSelected([id]);
        return;
      }

      const firstId = selected[0];
      const firstCard = cards.find((c) => c.id === firstId)!;

      setSelected([]);
      setMoves((m) => m + 1);

      if (firstCard.symbol === card.symbol) {
        playMatchSound();
        setCards((prev) =>
          prev.map((c) =>
            c.id === firstId || c.id === id ? { ...c, isFlipped: true, isMatched: true } : c
          )
        );
      } else {
        setLocked(true);
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstId || c.id === id ? { ...c, isFlipped: false } : c
            )
          );
          setLocked(false);
        }, 900);
      }
    },
    [cards, selected, locked, started, playFlipSound, playMatchSound]
  );

  const fmtTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const PawIcon = () => (
    <svg viewBox="0 0 24 24" className="memoryGameStatIcon" aria-hidden="true">
      <path
        d="M8.2 11.9c-1.7 0-3 1.3-3 2.9 0 2.2 2 3.9 4.5 3.9h4.6c2.5 0 4.5-1.7 4.5-3.9 0-1.6-1.3-2.9-3-2.9-.8 0-1.6.3-2.1.8l-.8.8c-.7.7-1.8.7-2.5 0l-.8-.8c-.6-.5-1.3-.8-2.2-.8Z"
        fill="currentColor"
      />
      <circle cx="8" cy="7" r="1.6" fill="currentColor" />
      <circle cx="11.2" cy="5.8" r="1.5" fill="currentColor" />
      <circle cx="14.8" cy="5.8" r="1.5" fill="currentColor" />
      <circle cx="18" cy="7" r="1.6" fill="currentColor" />
    </svg>
  );

  const ClockIcon = () => (
    <svg viewBox="0 0 24 24" className="memoryGameStatIcon" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.8v4.8l3.2 1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="memoryGame">
      <div className="memoryGameHeader">
        <span className="memoryGameLevel">Lv {levelIdx + 1} · {level.n}×{level.n}</span>
        <span className="memoryGameStat">
          <PawIcon /> <strong>{moves}</strong>
        </span>
        <span className="memoryGameStat">
          <ClockIcon /> <strong>{fmtTime(time)}</strong>
        </span>
      </div>

      <div
        className="memoryGameGrid"
        style={{
          gridTemplateColumns: `repeat(${level.cols}, ${level.cell}px)`,
          gridTemplateRows: `repeat(${level.rows}, ${level.cell}px)`,
        }}
      >
        {cards.map((card) => (
          <button
            key={card.id}
            className={`memoryCard${card.isFlipped || card.isMatched ? " flipped" : ""}${card.isMatched ? " matched" : ""}`}
            onClick={() => handleCardClick(card.id)}
            style={{ width: level.cell, height: level.cell }}
            aria-label={card.isFlipped || card.isMatched ? card.symbol : "Hidden card"}
          >
            <span className="memoryCardInner">
              <span className="memoryCardBack" />
              <span className="memoryCardFront" style={{ fontSize: Math.round(level.cell * 0.44) }}>
                {card.symbol}
              </span>
            </span>
          </button>
        ))}
      </div>

      {won && (
        <div className="memoryGameModal">
          <canvas ref={fireworksRef} className="memoryGameFireworks" />
          <div className="memoryGameModalBox">
            <div className="memoryGameModalEmoji">{isLastLevel ? "🏆" : "🎉"}</div>
            <div className="memoryGameModalTitle">
              {isLastLevel ? "You beat all levels!" : `Level ${levelIdx + 1} clear!`}
            </div>
            <div className="memoryGameModalSub">{moves} moves · {fmtTime(time)}</div>
            {!isLastLevel && (
              <button className="memoryGameModalBtn" onClick={() => goLevel(levelIdx + 1)}>
                Next Level →
              </button>
            )}
            <button className="memoryGameModalBtnSecondary" onClick={() => goLevel(0)}>
              {isLastLevel ? "Play Again" : "Restart from Lv 1"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
