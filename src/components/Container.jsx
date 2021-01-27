import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApps } from "../actions/applicationsActions";
import { WrapperComponent } from "./WrapperComponent/WrapperComponent";

export const Container = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getApps());
  }, [dispatch]);

  const isLoading = useSelector(
    (state) => state.applications.loadingGetApplications
  );

  const apps = useSelector((state) => state.applications.applications);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="d-flex justify-content-center">
          <WrapperComponent list={Object.entries(apps)} />
        </div>
      )}
    </>
  );
};
