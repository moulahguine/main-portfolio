import { RiDownloadLine } from "react-icons/ri";
import "./ResumeBtn.scss";

// Resume URL
const RESUME_URL = "/resume/resume.pdf";

export default function ResumeBtn({ className = "" }) {
  return (
    <button className={`button ${className}`} title="Download My Resume">
      <a href={RESUME_URL} download className="button--link ">
        <span className="button--icon" aria-hidden="true">
          <RiDownloadLine />
        </span>
        <span className="button--label">resume</span>
      </a>
    </button>
  );
}
