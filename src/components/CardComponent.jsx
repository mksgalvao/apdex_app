import { React } from "react";
import { Card } from "react-bootstrap";

import "./cardComponent.scss";

export const CardComponent = (props) => {
  const handleCardClick = (app) => {
    alert(`\n \n The ${app.name}  \n is in the ${app.version} version `);
  };

  return (
    <Card className={props.showList ? "bigCard" : "smallCard"}>
      <span className="title">{props.item[0]}</span>
      {props.item[1].map((app) => (
        <div
          key={app.name}
          onClick={(e) => handleCardClick(app)}
          className="cardRow"
        >
          <span className="apdex mr-3">{app.apdex}</span>
          <span className="name ">{app.name}</span>
        </div>
      ))}
    </Card>
  );
};
