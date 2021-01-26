import axios from "axios";
import { getmockedApps } from "../utils/apps";
export const GET_APPLICATIONS_SUCCESS = "GET_APPLICATIONS_SUCCESS";
export const GET_APPLICATIONS_ERROR = "GET_APPLICATIONS_ERROR";
export const GET_APPLICATIONS_LOADING = "GET_APPLICATIONS_LOADING";

export const getTopAppsByHost = () => {
  return async function (dispatch) {
    dispatch({
      type: GET_APPLICATIONS_LOADING,
    });

    // axios.get("https://kuupanda.free.beeceptor.com/apps").then((response) => {

    setTimeout(function () {
      const response = getmockedApps();
      if (response.response.status === 200) {
        dispatch({
          type: GET_APPLICATIONS_SUCCESS,
          data: response.response.data,
        });
      } else {
        dispatch({
          type: GET_APPLICATIONS_ERROR,
        });
      }
    }, 2000);
  };
};
