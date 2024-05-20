import React, { createContext, useContext, useEffect, useState } from "react";

export interface CardType {
  front: string;
  back: string;
  pronunciation: string;
  isReversed: boolean;
  id: number;
}

interface CardContextType {
  cards: CardType[];
  addCard: (card: CardType) => void;
  removeCard: (card: CardType) => void;
  onReverse: (index: number) => void;
}

const CardContext = createContext<CardContextType>({
  cards: [],
  addCard: () => {},
  removeCard: () => {},
  onReverse: () => {},
});
export const useCard = () => useContext<CardContextType>(CardContext);

const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storageCards = JSON.parse(localStorage.getItem("cards") as string);

  const [cards, setCards] = useState<CardType[]>(storageCards || []);

  const addCard = (card: CardType) => {
    setCards([...cards, card]);
  };
  const removeCard = (card: CardType) => {
    setCards(cards.filter((c) => c.id !== card.id));
  };

  const onReverse = (id: number) => {
    const newCards = cards.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          isReversed: !c.isReversed,
        };
      }
      return c;
    });
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardContext.Provider
      value={{
        cards,
        addCard,
        removeCard,
        onReverse,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
export default CardProvider;
