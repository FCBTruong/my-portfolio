import React from "react";

type LightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="lightboxOverlay" onClick={onClose} role="dialog" aria-modal="true">
      <img className="lightboxImg" src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
      <button className="lightboxClose" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
}
