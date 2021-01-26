import { React } from "react";
import { CardComponent } from "./CardComponent";
import { HeaderComponent } from "./HeaderComponent";

export const WrapperComponent = (props) => {
  return (
    <div>
      <HeaderComponent />
      {console.log(props)}
      {Object.entries(props.list).map((item, index) => (
        <CardComponent key={index} item={item} />
      ))}
    </div>
  );
};
