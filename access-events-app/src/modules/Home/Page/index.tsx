import { FunctionComponent } from "react";
import SectionHome from "../Components/SectionHome";
import EventsHome from "../Components/EventsSection";
import SuggestionSection from "../Components/SuggestionSection";
import CreateEventSection from "../Components/CreateEventSection";
import About from "../Components/About";
import { Header } from "../../../Components/Header/Header.component";

const Home: FunctionComponent = () => {
  return (
    <>
      <Header />
      <SectionHome />
      <section id="eventos">
        <EventsHome />
      </section>
      <section id="sugestoes">
        <SuggestionSection />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="crieEvento">
        <CreateEventSection />
      </section>
    </>
  );
};

export default Home;
