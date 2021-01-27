import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import { HeaderComponent } from "./HeaderComponent";

describe("Testing HeaderComponent", () => {
  let headerComponent;
  const setShowListMock = jest.fn();

  beforeEach(() => {
    headerComponent = shallow(
      <HeaderComponent showList={true} setVisualization={setShowListMock} />
    );
  });

  it("HeaderComponent should render", () => {
    expect(headerComponent).toMatchSnapshot();
  }),
    it("Should call setShowList when input checkbox was clicked", () => {
      const checkbox = headerComponent.find("input").at(0);
      checkbox.simulate("click", {});
      expect(setShowListMock).toHaveBeenCalledTimes(1);
    });
});
