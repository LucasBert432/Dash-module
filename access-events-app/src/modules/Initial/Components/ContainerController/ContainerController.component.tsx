import { FunctionComponent } from "react";
import useStyles from "./ContainerController.styles";
import { ContainerPage } from "../../../../Components/ContainerPage";
import { Button } from "../../../../Components/Button";

export type ContainerControllerProps = {
  onClick: () => void;
};

export const ContainerController: FunctionComponent<
  ContainerControllerProps
> = ({ onClick }) => {
  const styles = useStyles();

  return (
    <div css={styles.wrapper}>
      <ContainerPage size={270}>
        <Button text="Acessar" onClick={onClick} />
      </ContainerPage>
    </div>
  );
};
