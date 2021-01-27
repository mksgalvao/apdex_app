import reducer from "./applicationsReducer";
import * as actions from "../actions/applicationsActions";

import expect from "expect";
import { getmockedApps } from "../fixtures/mockedApps";

const initialState = {
  loadingGetApplications: true,
  errorGetApplications: false,
  applications: [],
};

describe("application reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_APPLICATIONS_LOADING", () => {
    const startAction = {
      type: actions.GET_APPLICATIONS_LOADING,
    };
    expect(reducer({}, startAction)).toEqual({ loadingGetApplications: true });
  });

  it("should handle GET_APPLICATIONS_SUCCESS", () => {
    const mockedApps = getmockedApps();
    const successAction = {
      type: actions.GET_APPLICATIONS_SUCCESS,
      data: mockedApps.data,
    };
    expect(reducer({}, successAction)).toEqual({
      loadingGetApplications: false,
      applications: mockedApps.data,
    });
  });

  it("should handle GET_APPLICATIONS_ERROR", () => {
    const failAction = {
      type: actions.GET_APPLICATIONS_ERROR,
      error: { success: false },
    };
    expect(reducer({}, failAction)).toEqual({
      errorGetApplications: true,
      loadingGetApplications: false,
    });
  });
});
