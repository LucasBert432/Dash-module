import React from "react";
import { CardProps } from "./Card.types";
import useStyles from "./Card.styles";

const Card: React.FunctionComponent<CardProps> = ({
  image,
  title,
  location,
  date,
}) => {
  const styles = useStyles();

  return (
    <div css={styles.card}>
      <img src={image} alt={title} css={styles.image} />
      <h2 css={styles.title}>{title}</h2>
      <p css={styles.location}>{location}</p>
      <p css={styles.date}>{date}</p>
    </div>
  );
};

export default Card;
