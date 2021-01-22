import axios from "axios";
export const GET_APPLICATIONS_SUCCESS = "GET_APPLICATIONS_SUCCESS";
export const GET_APPLICATIONS_ERROR = "GET_APPLICATIONS_ERROR";
export const GET_APPLICATIONS_LOADING = "GET_APPLICATIONS_LOADING";

export const getTopAppsByHost = () => {
  return async function (dispatch) {
    dispatch({
      type: GET_APPLICATIONS_LOADING,
    });

    axios.get("https://kuupanda.free.beeceptor.com/apps").then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_APPLICATIONS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: GET_APPLICATIONS_ERROR,
        });
      }
    });
  };
};
