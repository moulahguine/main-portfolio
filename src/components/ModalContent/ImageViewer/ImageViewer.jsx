import ImageWithFallback from "@/components/ImageWithFallback/ImageWithFallback";

// Component
export default function ImageViewer({
  src,
  fallback,
  alt,
  fill = true,
  sizes,
  quality,
  className = "",
  style,
}) {
  return (
    <div className="modal-content-viewer modal-content-viewer--image">
      {/* Figure is used to display the image */}
      <figure
        className={`modal-content-viewer__frame modal-content-viewer__frame--square ${className}`.trim()}
      >
        <ImageWithFallback
          src={src}
          fallback={fallback}
          alt={alt || "Enlarged image preview"}
          fill={fill}
          sizes={sizes}
          quality={quality}
          onContextMenu={(e) => e.preventDefault()}
          style={{ ...style }}
          className="modal-content-viewer__media modal-content-viewer__media--image"
        />
        <figcaption className="sr-only">
          {alt || "Enlarged image preview"}
        </figcaption>
      </figure>
    </div>
  );
}
