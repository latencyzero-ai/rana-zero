/**
 * The Zero product icon: a six-lobed mark with a four-point spark cut
 * from its center. Traced from the official lockup (North_9.jpg) as
 * six circles arranged at the 1/3/5/7/9/11 o'clock positions, unioned
 * via an SVG mask so the gradient reads as one continuous surface with
 * no seams at the overlaps, with the spark punched out as true
 * transparency rather than an opaque background-colored shape --
 * so it always reads correctly regardless of what's behind it.
 */
export default function ZeroMark({ size = 24, className, gradientId = 'zero-mark' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Zero"
    >
      <defs>
        <linearGradient id={`${gradientId}-base`} x1="55" y1="105" x2="155" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4FD3E6" />
          <stop offset="55%" stopColor="#00AEDA" />
          <stop offset="100%" stopColor="#0068DE" />
        </linearGradient>
        <radialGradient id={`${gradientId}-hl`} cx="68" cy="80" r="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <mask id={`${gradientId}-mask`}>
          <g fill="#fff">
            <circle cx="121" cy="63.63" r="50" />
            <circle cx="142" cy="100" r="50" />
            <circle cx="121" cy="136.37" r="50" />
            <circle cx="79" cy="136.37" r="50" />
            <circle cx="58" cy="100" r="50" />
            <circle cx="79" cy="63.63" r="50" />
          </g>
          <path
            d="M100,78 L104.24,95.76 L122,100 L104.24,104.24 L100,122 L95.76,104.24 L78,100 L95.76,95.76 Z"
            fill="#000"
          />
        </mask>
      </defs>
      <g mask={`url(#${gradientId}-mask)`}>
        <rect x="0" y="0" width="200" height="200" fill={`url(#${gradientId}-base)`} />
        <rect x="0" y="0" width="200" height="200" fill={`url(#${gradientId}-hl)`} />
      </g>
    </svg>
  )
}
