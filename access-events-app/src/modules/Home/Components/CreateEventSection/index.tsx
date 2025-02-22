import { FunctionComponent } from "react";
import useStyles from "./styles";
import BannerComponent from "./Components/BannerComponent";

const CreateEventSection: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <div css={styles.wrapper}>
      <div>
        <BannerComponent
          title="Crie, publique e divulgue"
          subTitle="Junte-se a mais de 100 mil produtores na Access"
        />
      </div>
    </div>
  );
};

export default CreateEventSection;
