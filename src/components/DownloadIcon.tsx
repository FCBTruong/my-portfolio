import React from "react";

export function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3v14m0 0l-5-5m5 5l5-5" />
      <rect x={5} y={19} width={14} height={2} rx={1} fill="currentColor" />
    </svg>
  );
}
