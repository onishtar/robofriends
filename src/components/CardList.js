import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => {
        return <Card robot={robot} key={robot.id} />;
      })}
    </div>
  );
};

export default CardList;
