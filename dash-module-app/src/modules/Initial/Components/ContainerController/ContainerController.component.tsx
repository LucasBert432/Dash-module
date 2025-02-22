import { FunctionComponent, useCallback } from "react";
import useStyles from "./ContainerController.styles";
import { ContainerPage } from "../../../../Components/ContainerPage";
import { Button } from "../../../../Components/Button";
import { useNavigate } from "react-router-dom";

export const ContainerController: FunctionComponent = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/home");
  }, []);

  return (
    <div css={styles.wrapper}>
      <ContainerPage size={270}>
        <Button text="Acessar" onClick={handleNavigate} />
      </ContainerPage>
    </div>
  );
};
