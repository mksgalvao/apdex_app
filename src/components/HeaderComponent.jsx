import { React } from "react";

import "./header.scss";

export const HeaderComponent = (props) => {
  const onInputSelect = () => {
    props.setVisualisation();
  };
  console.log(props);
  return (
    <div className="d-flex flex-row  mt-4">
      <div className="titleWrapper d-flex flex-row align-items-baseline">
        <h3 className="titleHeader font-weight-bold ml-4 mr-1  ">
          Apps by Host
        </h3>
        <p className="p-0 d-inline-block texte-left text-truncate">
          for user: averylongemailaddress@companyname.com
        </p>
      </div>
      <div className="inputWrapper d-flex align-items-center ml-4">
        <input
          className="mb-1 mr-2"
          type="checkbox"
          value={props.showList}
          id="visualization"
          onClick={onInputSelect}
        />
        <label className="label" for="visualization">
          {props.showList ? "Show as an awesome grid" : "Show as a list"}
        </label>
      </div>
    </div>
  );
};
