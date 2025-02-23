import { FunctionComponent, useCallback } from "react";
import useStyles from "./styles";
import { Text } from "../../../../../../Components/Text";
import { Button } from "../../../../../../Components/Button";
import { BannerComponentProps } from "./types";
import RenderIf from "../../../../../../Components/RenderIf";
import { Flex } from "../../../../../../Components/Flex";
import { useMediaQuery } from "@mui/material";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import SolicitationModal from "../../../Modal/SolicitationModal";

const BannerComponent: FunctionComponent<BannerComponentProps> = ({
  title,
  subTitle,
}) => {
  const styles = useStyles();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const { showModal } = useModalContext();

  const handleModalOpen = useCallback(() => {
    showModal("NEW_SOLICITATION", {
      title: "Solicitar evento",
      description: "Preencha o formulário",
      width: 610,
    });
  }, [showModal]);

  return (
    <div css={styles.container}>
      <div css={styles.leftSide}>
        <Flex>
          <div css={styles.containerText}>
            <Text invert size="28px" weight="bold">
              {title}
            </Text>
            <Text invert size="18px" weight="lighter">
              {subTitle}
            </Text>
          </div>
          <div css={styles.button}>
            <Button text={"Clique aqui"} onClick={handleModalOpen} />
          </div>
        </Flex>
      </div>
      <RenderIf condition={!isMobile}>
        <div css={styles.rightSide}></div>
      </RenderIf>
      <SolicitationModal />
    </div>
  );
};

export default BannerComponent;
