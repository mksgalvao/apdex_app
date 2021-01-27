import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApps } from "../actions/applicationsActions";
import {
  getTopAppsByHostSelect,
  isLoadingAppsSelect,
} from "../selectors/applicationsSelectors";
import { WrapperComponent } from "./WrapperComponent";

export const Container = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getApps());
  }, [dispatch]);

  const isLoading = isLoadingAppsSelect(state);
  const apps = getTopAppsByHostSelect(state);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="d-flex justify-content-center">
          <WrapperComponent list={apps} />
        </div>
      )}
    </>
  );
};
