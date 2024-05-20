import { CardType, useCard } from "@/context/CardProvider";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast.ts";

const CardForm = () => {
  const [front, setFront] = useState<string>("");
  const [back, setBack] = useState<string>("");
  const [pronunciation, setPronunciation] = useState<string>("");
  const { cards, addCard } = useCard();

  const onAdd = () => {
    const newCards: CardType = {
      id: cards.length + 1,
      front,
      back,
      pronunciation,
      isReversed: false,
    };
    toast({
      title: "Card added",
      duration: 2000,
      style: {
        background: "green",
        display: "block !important",
      },
    });
    addCard(newCards);
    setFront("");
    setBack("");
    setPronunciation("");
  };

  const isButtonDisabled: boolean = !front || !back;

  return (
    <form className={"flex flex-col p-4 gap-2"}>
      <input
        className={"bg-transparent border px-2 py-3 rounded-md"}
        value={front}
        type="text"
        placeholder="front"
        onChange={(e) => setFront(e.target.value)}
      />
      <input
        className={"bg-transparent border px-2 py-3 rounded-md"}
        value={back}
        type="text"
        placeholder="back"
        onChange={(e) => setBack(e.target.value)}
      />
      <input
        className={"bg-transparent border px-2 py-3 rounded-md"}
        value={pronunciation}
        type="text"
        placeholder="pronunciation"
        onChange={(e) => setPronunciation(e.target.value)}
      />
      <button
        disabled={isButtonDisabled}
        className={
          "bg-green-700 py-3 border border-green-700 rounded-md disabled:bg-green-900"
        }
        onClick={onAdd}
      >
        add
      </button>
    </form>
  );
};
export default CardForm;
