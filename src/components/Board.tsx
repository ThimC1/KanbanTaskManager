// Board.tsx
import React, { useState } from "react";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface CardData {
  id: string;
  title: string;
  description: string;
}

interface ColumnData {
  id: string;
  title: string;
  cards: CardData[];
}

const Board: React.FC = () => {
  const [boardData, setBoardData] = useState<ColumnData[]>([
    {
      id: "column1",
      title: "To Do",
      cards: [
        { id: "card1", title: "Card 1", description: "Card 1 description" },
        { id: "card2", title: "Card 2", description: "Card 2 description" },
      ],
    },
    {
      id: "column2",
      title: "In Progress",
      cards: [
        { id: "card3", title: "Card 3", description: "Card 3 description" },
        { id: "card4", title: "Card 4", description: "Card 4 description" },
      ],
    },
    {
      id: "column3",
      title: "Done",
      cards: [
        { id: "card5", title: "Card 5", description: "Card 5 description" },
      ],
    },
  ]);

  const handleMoveCard = (
    cardId: string,
    sourceColumnId: string,
    targetColumnId: string
  ) => {
    setBoardData((prevBoardData) => {
      const sourceColumn = prevBoardData.find(
        (column) => column.id === sourceColumnId
      );
      const targetColumn = prevBoardData.find(
        (column) => column.id === targetColumnId
      );

      if (!sourceColumn || !targetColumn) return prevBoardData;

      const cardToMove = sourceColumn.cards.find((card) => card.id === cardId);
      if (!cardToMove) return prevBoardData;

      // Remove the card from the source column
      sourceColumn.cards = sourceColumn.cards.filter(
        (card) => card.id !== cardId
      );

      // Add the card to the target column
      targetColumn.cards = [...targetColumn.cards, cardToMove];

      return [...prevBoardData];
    });
  };

  const handleAddCard = (columnId: string, newCard: CardData) => {
    setBoardData((prevBoardData) =>
      prevBoardData.map((column) =>
        column.id === columnId
          ? { ...column, cards: [...column.cards, newCard] }
          : column
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1 className="text-center text-3xl font-bold mb-8">Kanban Board</h1>
        <div className="flex space-x-4">
          {boardData.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              cards={column.cards}
              onMoveCard={handleMoveCard}
              onAddCard={handleAddCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Board;
