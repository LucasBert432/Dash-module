import { TextField, TextFieldProps } from "@mui/material";
import useStyles from "./InputText.styles";

const InputText: React.FC<TextFieldProps> = (props) => {
  const styles = useStyles();

  return <TextField {...props} css={styles.textField} />;
};

export default InputText;
