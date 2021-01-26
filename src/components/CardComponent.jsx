import { React } from "react";

export const CardComponent = (props) => {
  return (
    <div>
      <h4>{props.item[0]}</h4>
      {props.item[1].map((app) => (
        <>
          <p>{app.apdex}</p>
          <p>{app.name}</p>
        </>
      ))}
    </div>
  );
};
