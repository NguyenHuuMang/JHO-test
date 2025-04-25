import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import "./style.scss";
import iconClose from "../../assets/images/icon-close.png";
interface Props {
  show?: boolean;
  title: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  dialogClassName?: string;
  onClose: () => void;
  onClickPrev?: () => void;
  onClickBack?: boolean;
  showTitle?: boolean;
  popupName?: string;
  specialStyle?: boolean;
}

const Modal: FC<Props> = ({
  show = true,
  title,
  children,
  contentClassName,
  dialogClassName,
  onClose,
  onClickPrev,
  onClickBack = true,
  showTitle = true,
  popupName,
  specialStyle = false,
}) => {
  if (!show) return null;

  return (
    <div
      className="custom-modal-overlay"
      onClick={onClickBack ? onClose : () => {}}
    >
      <div
        className={clsx("custom-modal-dialog", dialogClassName)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={clsx("modal-content", contentClassName)}>
          {showTitle && (
            <div className="custom-modal-header">
              <h2
                className={clsx("modal-title", onClickPrev && "clickable")}
                onClick={onClickPrev}
              >
                {onClickPrev && (
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                )}
                {title}
              </h2>
              <button className="modal-close" onClick={onClose}>
                ×
              </button>
            </div>
          )}
          {!showTitle && popupName !== "popup-exporter" && (
            <div className="icon-close-modal">
              <img
                src={iconClose}
                alt="close-icon"
                className="close-icon"
                onClick={onClose}
              />
            </div>
          )}
          <div
            className={clsx(
              "custom-modal-content",
              specialStyle ? "special-modal-body" : "custom-modal-body"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
