import CloseIcon from "@/assets/icons/CloseIcon";
import CardForm from "@/components/Form/CardForm";
import { CardType, useCard } from "@/context/CardProvider";
import { Card, CardContent } from "@/components/ui/card.tsx";

const Cards = () => {
  const { cards, onReverse, removeCard } = useCard();

  const onDelete = (card: CardType) => {
    removeCard(card);
  };
  return (
    <div className={"p-4"}>
      <CardForm />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`card border-none overflow-hidden ${
              card.isReversed ? "reversed" : ""
            }  bg-transparent`}
            onClick={() => onReverse(card.id)}
          >
            <div className="card-inner bg-[var(--card-light)] dark:bg-[var(--card-dark)] dark:text-[var(--card-light)]">
              <CardContent className="front p-0 overflow-hidden border rounded-[12px] border-[rgba(74,72,72,0.285)] ">
                {card.front}
                {card.pronunciation && (
                  <div className="pronunciation">({card.pronunciation})</div>
                )}
              </CardContent>
              <CardContent className="back p-0 overflow-hidden border rounded-[12px] border-[rgba(74,72,72,0.285)]">
                {card.back}
              </CardContent>
            </div>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(card);
              }}
            >
              <CloseIcon />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
