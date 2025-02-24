import { FunctionComponent, useState } from "react";
import useStyles from "./BoxOptionsList.styles";
import { initialBoxOptions } from "./BoxOptionsList.consts";
import BoxOption from "../../../../../../Components/BoxOption/BoxOption.component";

const BoxOptionsList: FunctionComponent = () => {
  const styles = useStyles();
  const [boxOptions] = useState(initialBoxOptions);
  return (
    <div css={styles.container}>
      <div css={styles.cardGrid}>
        {boxOptions.map((box, index) => (
          <BoxOption key={index} text={box.text} />
        ))}
      </div>
    </div>
  );
};

export default BoxOptionsList;
