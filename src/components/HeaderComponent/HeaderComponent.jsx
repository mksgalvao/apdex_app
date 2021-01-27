import { React } from "react";

import "./header.scss";

export const HeaderComponent = (props) => {
  const onInputSelect = () => {
    props.setVisualization();
  };
  return (
    <div className="headerWrapper ">
      <div className="textWrapper ">
        <h3 className="headerTitle   mr-1 ">Apps by Host</h3>
        <p className="email d-inline-block texte-left text-truncate">
          for user: averylongemailaddress@companyname.com
        </p>
      </div>
      <div className="inputWrapper d-flex align-items-center ">
        <input
          className="mb-1 mr-2"
          type="checkbox"
          id="visualization"
          onClick={onInputSelect}
        />
        <label className="label" htmlFor="visualization">
          {props.showList ? "Show as an awesome grid" : "Show as a list"}
        </label>
      </div>
    </div>
  );
};
