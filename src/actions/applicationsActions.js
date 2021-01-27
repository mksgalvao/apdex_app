import axios from "axios";
import { sortedIndex, sortBy, reduce } from "lodash";

export const GET_APPLICATIONS_SUCCESS = "GET_APPLICATIONS_SUCCESS";
export const GET_APPLICATIONS_ERROR = "GET_APPLICATIONS_ERROR";
export const GET_APPLICATIONS_LOADING = "GET_APPLICATIONS_LOADING";

/* The complexity for this solution was O(nxm) where 'n' 
    is the number of apps  and 'm' the number of hosts in the list */

const getTopAppsByHost = (apps) => {
  const addAppToHosts = (app, host, hostMap) => {
    let appList = hostMap[host];
    if (appList) {
      appList.splice(sortedIndex(appList, app, "grade"), 0, app);
    } else {
      appList = [app];
    }
    appList = sortBy(appList, "apdex").reverse();
    hostMap[host] = appList.slice(0, 25);
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

    axios.get("https://kuupanda.free.beeceptor.com/apps").then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_APPLICATIONS_SUCCESS,
          data: getTopAppsByHost(response.data),
        });
      } else {
        dispatch({
          type: GET_APPLICATIONS_ERROR,
        });
      }
    });
  };
};
