import { useState } from "react";
import useStyles from "./CardList.styles";
import { initialCards } from "./CardList.consts";
import Card from "../../../../../../Components/Card";
import { formatDate } from "../../../../../../utils/formatDate";

const CardList = () => {
  const styles = useStyles();
  const [cards] = useState(initialCards);
  return (
    <div css={styles.container}>
      <div css={styles.cardGrid}>
        {cards.map((card, index) => (
          <Card
            location={card.description}
            date={formatDate(card?.date)}
            title={card.title}
            image={card.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
