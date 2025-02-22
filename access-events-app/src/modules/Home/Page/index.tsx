import { FunctionComponent } from "react";
import Header from "../../../Components/Header";
import SectionHome from "../Components/SectionHome";
import EventsHome from "../Components/EventsSection";
import SuggestionSection from "../Components/SuggestionSection";
import CreateEventSection from "../Components/CreateEventSection";
import useStyles from "./styles";
import About from "../Components/About";

export const Home: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <>
      <Header />
      <SectionHome />
      <section css={styles.wrapper} id="eventos">
        <EventsHome />
      </section>
      <section css={styles.wrapper} id="sugestoes">
        <SuggestionSection />
      </section>
      <section css={styles.wrapper} id="sobre">
        <About />
      </section>
      <section css={styles.wrapper} id="crieEvento">
        <CreateEventSection />
      </section>
    </>
  );
};
