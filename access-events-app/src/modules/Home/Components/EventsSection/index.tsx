import { FunctionComponent } from "react";
import { BoxContainer } from "../../../../Components/BoxContainer/BoxContainer.component";
import CardList from "./Components/CardList";
import useStyles from "./styles";

const EventsSection: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <div css={styles.wrapper}>
      <BoxContainer invertTheme title="Eventos" subtitle="Próximos eventos">
        <CardList />
      </BoxContainer>
    </div>
  );
};

export default EventsSection;
