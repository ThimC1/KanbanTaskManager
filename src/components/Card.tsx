// Card.tsx
import React from "react";
import { useDrag } from "react-dnd";

interface CardProps {
  id: string;
  title: string;
  description: string;
  columnId: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, columnId }) => {
  const [, dragRef] = useDrag({
    type: "CARD",
    item: { id, columnId },
  });

  return (
    <div
      ref={dragRef}
      className="mb-4 p-4 border bg-gray-100 rounded cursor-move"
    >
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
