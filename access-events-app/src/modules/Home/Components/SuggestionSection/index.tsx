import { FunctionComponent } from "react";
import { BoxContainer } from "../../../../Components/BoxContainer/BoxContainer.component";
import useStyles from "./styles";
import ModalNewActivities from "../Modal/SolicitationModal";
import BoxOptionsList from "./Components/BoxOptionsList";

const SuggestionSection: FunctionComponent = () => {
  const styles = useStyles();

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
