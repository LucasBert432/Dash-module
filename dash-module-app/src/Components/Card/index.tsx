import { FunctionComponent } from "react";
import { CardProps } from "./Card.types";
import useStyles from "./Card.styles";

const Card: FunctionComponent<CardProps> = ({ image, title, description }) => {
  const styles = useStyles();

  return (
    <div css={styles.card}>
      <img src={image} alt={title} css={styles.image} />
      <h3 css={styles.title}>{title}</h3>
      <p css={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
