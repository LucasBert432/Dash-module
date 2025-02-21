import { FunctionComponent, useCallback } from "react";
import useStyles from "./ContainerController.styles";
import { ContainerPage } from "../../../../Components/ContainerPage";
import { useThemeStore } from "../../../../globalStore/globalStore";
import { Button } from "../../../../Components/Button";
import { useNavigate } from "react-router-dom";

export const ContainerController: FunctionComponent = () => {
  const styles = useStyles();
  const isWhite = useThemeStore((state) => state.isWhite);
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/home");
  }, []);

  return (
    <div css={styles.wrapper}>
      <ContainerPage isWhite={isWhite}>
        <Button text="Acessar" onClick={handleNavigate} isWhite={isWhite} />
      </ContainerPage>
    </div>
  );
};
