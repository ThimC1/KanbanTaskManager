// Column.tsx
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

interface CardData {
  id: string;
  title: string;
  description: string;
}

interface ColumnProps {
  id: string;
  title: string;
  cards: CardData[];
  onMoveCard: (cardId: string, sourceColumnId: string, targetColumnId: string) => void;
  onAddCard: (columnId: string, card: CardData) => void;
}

const Column: React.FC<ColumnProps> = ({ id, title, cards, onMoveCard, onAddCard }) => {
  const [, dropRef] = useDrop({
    accept: "CARD",
    drop: (item: { id: string; columnId: string }) => {
      if (item.columnId !== id) {
        onMoveCard(item.id, item.columnId, id);
      }
    },
  });

  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");

  const handleAddCard = () => {
    if (newCardTitle.trim() && newCardDescription.trim()) {
      const newCard = {
        id: `card-${Date.now()}`, // Unique ID for the card
        title: newCardTitle,
        description: newCardDescription,
      };
      onAddCard(id, newCard);
      setNewCardTitle("");
      setNewCardDescription("");
    }
  };

  return (
    <div
      ref={dropRef}
      className="flex flex-col w-80 p-4 border rounded bg-gray-50"
    >
      <h2 className="font-semibold text-xl mb-4">{title}</h2>
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            columnId={id}
          />
        ))}
      </div>
      <div className="mt-4">
        <input
          className="w-full mb-2 p-2 border rounded"
          type="text"
          placeholder="Card Title"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        <textarea
          className="w-full mb-2 p-2 border rounded"
          placeholder="Card Description"
          value={newCardDescription}
          onChange={(e) => setNewCardDescription(e.target.value)}
        />
        <button
          className="w-full px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleAddCard}
        >
          Add Card
        </button>
      </div>
    </div>
  );
};

export default Column;
