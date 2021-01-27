import axios from "axios";
import { getmockedApps } from "../utils/apps";
import { sortedIndex, sortBy, reduce } from "lodash";

export const GET_APPLICATIONS_SUCCESS = "GET_APPLICATIONS_SUCCESS";
export const GET_APPLICATIONS_ERROR = "GET_APPLICATIONS_ERROR";
export const GET_APPLICATIONS_LOADING = "GET_APPLICATIONS_LOADING";

const getTopAppsByHost = (apps) => {
  const addAppToHosts = (app, host, hostMap) => {
    let appList = hostMap[host];
    if (appList) {
      appList.splice(sortedIndex(appList, app, "grade"), 0, app);
    } else {
      appList = [app];
    }
    appList = sortBy(appList, "apdex").reverse();
    hostMap[host] = appList.slice(0, 5); // should be 5
  };

  return reduce(
    apps,
    (acc, app) => {
      const hosts = app.host;
      if (hosts) {
        hosts.forEach((host) => addAppToHosts(app, host, acc));
      }
      return acc;
    },
    {}
  );
};

export const getApps = () => {
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
          data: getTopAppsByHost(response.response.data),
        });
      } else {
        dispatch({
          type: GET_APPLICATIONS_ERROR,
        });
      }
    }, 2000);
  };
};
