import { React, useState } from "react";
import { CardComponent } from "./CardComponent";
import { HeaderComponent } from "./HeaderComponent";

import "./wrapperComponent.scss";

export const WrapperComponent = (props) => {
  const [showList, setShowList] = useState(true);

  const setVisualization = () => {
    setShowList(!showList);
  };
  return (
    <div className="wrapper">
      <HeaderComponent
        setVisualization={setVisualization}
        showList={showList}
      />
      <div className="listWrapper">
        <ul>
          {Object.entries(props.list).map((item, index) => (
            <li key={index} className={showList ? "list" : "grid"}>
              <CardComponent item={item} showList={showList} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
