import { FunctionComponent, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import { Modal as MUIModal, Box, IconButton, ModalProps } from "@mui/material";
import { useModalContext } from "../../contexts/ModalContext";
import CloseIcon from "@mui/icons-material/Close";
import { Flex } from "../Flex";

const Modal: FunctionComponent<ModalProps> = ({ children, id, ...rest }) => {
  const { open, settings, closeModal } = useModalContext();
  const location = useLocation();

  const handleModalDismiss = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (!settings?.persistent) {
      closeModal();
    }
  }, [closeModal, location, settings?.persistent]);

  if (open !== id) return null;

  return ReactDOM.createPortal(
    <MUIModal
      {...rest}
      open
      onClose={handleModalDismiss}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: settings?.width || 450,
          padding: "16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: 24,
          outline: "none",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "8px",
          }}
        >
          <Flex>
            {settings?.title && (
              <h2 id="modal-title" style={{ margin: 0 }}>
                {settings.title}
              </h2>
            )}
            {settings?.description && (
              <span id="modal-description" style={{ margin: 0 }}>
                {settings.description}
              </span>
            )}
          </Flex>
          <IconButton
            aria-label="close"
            onClick={handleModalDismiss}
            style={{ position: "absolute", top: "8px", right: "8px" }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div id="modal-description">{children}</div>
      </Box>
    </MUIModal>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
