import { ClipLoader } from "react-spinners";
import "./spiner.scss";

interface SpinerProps {
    size?: number,
    color?: string
}

export function Spiner({size, color}: SpinerProps): React.ReactElement {
  return (
    <div className="spiner">
      <ClipLoader size={size} color={color}  />
    </div>
  );
}
