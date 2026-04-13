type ProjectPreviewProps = {
  title: string;
  previewMp4?: string;
  previewGif?: string;
  youtubeUrl?: string;
};

export function ProjectPreview({ title, previewMp4, previewGif, youtubeUrl }: ProjectPreviewProps) {
  return (
    <div className="previewCard">
      {previewMp4 ? (
        <video
          className="previewMedia"
          src={previewMp4}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${title} preview video`}
        />
      ) : previewGif ? (
        <img src={previewGif} alt={`${title} preview`} className="previewMedia" loading="lazy" />
      ) : (
        <div className="previewPlaceholder">No preview</div>
      )}

      {youtubeUrl ? (
        <a
          className="previewOverlayBtn"
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Watch full demo of ${title}`}
        >
          Watch Full Demo
        </a>
      ) : null}
    </div>
  );
}
