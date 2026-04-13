import React from "react";

type Ripple = { id: number; x: number; y: number };

export function ClickRipples() {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const rippleIdRef = React.useRef(0);

  React.useEffect(() => {
    const timers: number[] = [];

    const onPointerDown = (e: PointerEvent) => {
      const id = rippleIdRef.current + 1;
      rippleIdRef.current = id;
      setRipples((current) => [...current, { id, x: e.clientX, y: e.clientY }].slice(-10));

      const timer = window.setTimeout(() => {
        setRipples((current) => current.filter((r) => r.id !== id));
      }, 1300);

      timers.push(timer);
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div className="clickRipples" aria-hidden="true">
      {ripples.map((r) => (
        <React.Fragment key={r.id}>
          <span className="rippleDots" style={{ left: `${r.x}px`, top: `${r.y}px` }} />
          <span className="ripple rippleA" style={{ left: `${r.x}px`, top: `${r.y}px` }} />
          <span className="ripple rippleB" style={{ left: `${r.x}px`, top: `${r.y}px` }} />
        </React.Fragment>
      ))}
    </div>
  );
}
