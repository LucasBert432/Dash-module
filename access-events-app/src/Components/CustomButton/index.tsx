import { Button, ButtonProps } from "@mui/material";
import useStyles from "./CustomButton.styles";

const CustomButton = ({ variant = "contained", ...props }: ButtonProps) => {
  const styles = useStyles();

  return (
    <Button
      {...props}
      variant={variant}
      css={variant === "contained" ? styles.button : styles.outlinedButton}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
