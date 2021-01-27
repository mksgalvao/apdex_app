import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import { CardComponent } from "./CardComponent";
import { mockedApps } from "../../utils/apps";

describe("Testing cardComponent", () => {
  let cardComponent;

  beforeEach(() => {
    cardComponent = shallow(
      <CardComponent item={mockedApps} showList={true} />
    );
  });

  it("CardComponent should render", () => {
    expect(cardComponent).toMatchSnapshot();
  }),
    it("Should open alert on item was clicked", () => {
      jest.spyOn(window, "alert").mockImplementation(() => {});
      const item = cardComponent.find("div").at(0);
      item.simulate("click", {});
      expect(window.alert).toHaveBeenCalledTimes(1);
    });
});
