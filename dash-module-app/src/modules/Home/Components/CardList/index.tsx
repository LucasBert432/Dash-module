import { useState } from "react";
import useStyles from "./CardList.styles";
import { initialCards } from "./CardList.consts";
import Card from "../../../../Components/Card";
import Modal from "../Modal";
import { CardType } from "./CardList.types";
import RenderIf from "../../../../Components/RenderIf";

const CardList = () => {
  const styles = useStyles();
  const [cards, setCards] = useState(initialCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCard = (newCard: CardType) => {
    setCards([...cards, newCard]);
    setIsModalOpen(false);
  };

  return (
    <div css={styles.container}>
      <button css={styles.addButton} onClick={() => setIsModalOpen(true)}>
        Adicionar Card
      </button>
      <div css={styles.cardGrid}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <RenderIf condition={isModalOpen}>
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSubmit={addCard}
          open={isModalOpen}
        />
      </RenderIf>
    </div>
  );
};

export default CardList;
