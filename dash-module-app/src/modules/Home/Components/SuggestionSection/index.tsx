import { FunctionComponent } from "react";
import { BoxContainer } from "../../../../Components/BoxContainer";
import useStyles from "./styles";
// import { useModalContext } from "../../../../contexts/ModalContext";
// import { Button } from "../../../../Components/Button";
import ModalNewActivities from "../Modal";
import BoxOptionsList from "./Components/BoxOptionsList";

const SuggestionSection: FunctionComponent = () => {
  const styles = useStyles();
  // const { showModal } = useModalContext();

  // const handleModal = useCallback(() => {
  //   showModal("NEW_ACTIVITIES", {
  //     title: "Solicitar evento",
  //     width: 610,
  //   });
  // }, [showModal]);

  return (
    <div css={styles.wrapper}>
      <BoxContainer title="Sugestões" subtitle="Algumas sugestões de eventos">
        <BoxOptionsList />
      </BoxContainer>
      <ModalNewActivities />
    </div>
  );
};

export default SuggestionSection;
