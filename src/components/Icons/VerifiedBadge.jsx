export default function VerifiedBadge({
  width = 25,
  height = 25,
  className,
  ...rest
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...rest}
    >
      <path
        fill="#3A6FF8"
        d="
      M12 1.8
      a2.2 2.2 0 0 1 2.1 1.5
      a2.2 2.2 0 0 0 3.2 1.2
      a2.2 2.2 0 0 1 3 3
      a2.2 2.2 0 0 0 1.2 3.2
      a2.2 2.2 0 0 1 0 4.2
      a2.2 2.2 0 0 0 -1.2 3.2
      a2.2 2.2 0 0 1 -3 3
      a2.2 2.2 0 0 0 -3.2 1.2
      a2.2 2.2 0 0 1 -4.2 0
      a2.2 2.2 0 0 0 -3.2 -1.2
      a2.2 2.2 0 0 1 -3 -3
      a2.2 2.2 0 0 0 -1.2 -3.2
      a2.2 2.2 0 0 1 0 -4.2
      a2.2 2.2 0 0 0 1.2 -3.2
      a2.2 2.2 0 0 1 3 -3
      a2.2 2.2 0 0 0 3.2 -1.2
      a2.2 2.2 0 0 1 2.1 -1.5
      z"
      />
      <path fill="white" d="M10.2 14.2l-2.6-2.6-1.4 1.4 4 4 7-7-1.4-1.4z" />
    </svg>
  );
}
