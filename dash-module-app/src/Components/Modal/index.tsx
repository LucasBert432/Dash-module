import { FunctionComponent } from "react";
import { Modal as MuiModal } from "@mui/material";
import { CustomModalProps } from "./Modal.types";
import useStyles from "./Modal.styles";

const CustomModal: FunctionComponent<CustomModalProps> = ({
  open,
  onClose,
  children,
}) => {
  const styles = useStyles();

  return (
    <MuiModal open={open} onClose={onClose}>
      <div css={styles.overlay}>
        <div css={styles.modal}>{children}</div>
      </div>
    </MuiModal>
  );
};

export default CustomModal;
