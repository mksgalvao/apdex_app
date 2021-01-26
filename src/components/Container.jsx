import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopAppsByHost } from "../actions/applicationsActions";
import {
  getAllAppsSelect,
  isLoadingAppsSelect,
  appsByHostSelect,
} from "../selectors/applicationsSelectors";
import { WrapperComponent } from "./WrapperComponent";

export const Container = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTopAppsByHost());
  }, [dispatch]);

  const isLoading = isLoadingAppsSelect(state);
  const apps = getAllAppsSelect(state);

  let hosts;

  if (apps !== undefined) {
    hosts = appsByHostSelect(apps);
  }

  return (
    <>
      {isLoading || !hosts ? (
        <p>Loading...</p>
      ) : (
        <>
          <WrapperComponent list={hosts} />
        </>
      )}
    </>
  );
};
