// Spinner.tsx
type SpinnerProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export function SpinnerInput({
  size = 18,
  color = "#2563eb",
  strokeWidth = 3,
}: SpinnerProps): React.ReactElement {
  return (
    <svg
      className="spiner-input"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      role="status"
      aria-label="Carregando"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="31.4 188.4"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
