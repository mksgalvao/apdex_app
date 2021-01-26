import { React } from "react";
import { Card } from "react-bootstrap";

import "./cardComponent.scss";

export const CardComponent = (props) => {
  return (
    <Card className={props.showList ? "bigCard" : "smallCard"}>
      <span className="title">{props.item[0]}</span>
      {props.item[1].map((app) => (
        <div className="d-flex flex-row mb-2">
          <span className="apdex mr-3 ml-3">{app.apdex}</span>
          <span className="name ">{app.name}</span>
        </div>
      ))}
    </Card>
  );
};
