import { compose } from "redux";
import { sortedIndex, sortBy } from "lodash";

export const isLoadingAppsSelect = (state) =>
  state.applications.loadingGetApplications;

export const getAllAppsSelect = compose(
  (state) => state.applications.applications
);

export const appsByHostSelect = (apps) => {
  const addHost = (app, host, hostMap) => {
    let appList = hostMap[host];
    if (appList) {
      appList.splice(sortedIndex(appList, app, "grade"), 0, app);
    } else {
      appList = [app];
    }
    appList = sortBy(appList, "apdex").reverse();
    hostMap[host] = appList.slice(0, 5);
  };

  return apps.reduce((acc, app) => {
    const hosts = app.host;
    if (hosts) {
      hosts.forEach((host) => addHost(app, host, acc));
    }
    return acc;
  }, {});
};
