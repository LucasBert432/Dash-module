import { FunctionComponent } from "react";
import useStyles from "./ContainerController.styles";
import { ContainerPage } from "../ContainerPage";
import { useThemeStore } from "../../globalStore/globalStore";

export const ContainerController: FunctionComponent = () => {
  const styles = useStyles();
  const isWhite = useThemeStore((state) => state.isWhite);

  return (
    <>
      <div css={styles.wrapper}>
        <ContainerPage isWhite={isWhite}>Conteúdo</ContainerPage>
      </div>
    </>
  );
};
