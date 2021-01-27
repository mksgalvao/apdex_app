import { compose } from "redux";

export const isLoadingAppsSelect = (state) =>
  state.applications.loadingGetApplications;

export const getTopAppsByHostSelect = compose(
  (state) => state.applications.applications
);
