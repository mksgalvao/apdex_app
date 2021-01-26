import { React, useState } from "react";
import { CardComponent } from "./CardComponent";
import { HeaderComponent } from "./HeaderComponent";

import "./wrapperComponent.scss";

export const WrapperComponent = (props) => {
  const [showList, setShowList] = useState(true);

  const setVisualisation = () => {
    setShowList(!showList);
  };
  return (
    <div className="wrapper">
      <HeaderComponent
        setVisualisation={setVisualisation}
        showList={showList}
      />
      <ul>
        {Object.entries(props.list).map((item, index) => (
          <li className={showList ? "list" : "grid"}>
            <CardComponent key={index} item={item} showList={showList} />
          </li>
        ))}
      </ul>
    </div>
  );
};
