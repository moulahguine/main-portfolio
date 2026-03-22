import { TfiClose } from "react-icons/tfi";
import "./CloseButton.scss";

const CloseButton = ({
  onClick,
  ariaLabel = "Close",
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`close-button ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      <TfiClose aria-hidden="true" />
    </button>
  );
};

export default CloseButton;
