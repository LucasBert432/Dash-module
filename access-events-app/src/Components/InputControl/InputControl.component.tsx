import { TextField, TextFieldProps } from "@mui/material";
import InputMask from "react-input-mask";
import useStyles from "./InputText.styles";
import { ReactElement } from "react";
import {
  Controller,
  Control,
  Path,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  FieldValues,
} from "react-hook-form";

type InputControlType<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control?: Control<T>;
  errorMessage?: string;
  mask?: string;
};

export function InputControl<T extends FieldValues>({
  name,
  control,
  errorMessage,
  mask,
  onChange: onInputChange,
  ...rest
}: InputControlType<T>): ReactElement {
  const styles = useStyles();

  function handleControllerRender({
    field,
    fieldState,
  }: {
    field: ControllerRenderProps<T, Path<T>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
  }) {
    const textFieldProps = {
      css: styles.textField,
      error: !!fieldState.error,
      helperText: fieldState.error?.message || errorMessage,
      inputRef: field.ref,
      ...rest,
    };

    if (mask) {
      return (
        <InputMask
          mask={mask}
          value={field.value || ""}
          onChange={(event) => {
            field.onChange(event);
            if (onInputChange) onInputChange(event);
          }}
        >
          {(inputProps: any) => (
            <TextField {...inputProps} {...textFieldProps} />
          )}
        </InputMask>
      );
    }

    return (
      <TextField
        {...textFieldProps}
        value={field.value || ""}
        onChange={(event) => {
          field.onChange(event);
          if (onInputChange) onInputChange(event);
        }}
      />
    );
  }

  return (
    <Controller name={name} control={control} render={handleControllerRender} />
  );
}
