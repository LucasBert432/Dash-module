import { TextField, TextFieldProps } from "@mui/material";
import useStyles from "./InputText.styles";
import { FunctionComponent } from "react";

const InputText: FunctionComponent<TextFieldProps> = (props) => {
  const styles = useStyles();

  return <TextField {...props} css={styles.textField} />;
};

export default InputText;
