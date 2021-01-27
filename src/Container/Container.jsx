import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApps } from "../actions/applicationsActions";
import { WrapperComponent } from "../components/WrapperComponent/WrapperComponent";
import { Spinner } from "react-bootstrap";

import "../components/style.scss";

export const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApps());
  }, [dispatch]);

  const isLoading = useSelector(
    (state) => state.applications.loadingGetApplications
  );

  const isError = useSelector(
    (state) => state.applications.errorGetApplications
  );

  const apps = useSelector((state) => state.applications.applications);

  return (
    <>
      {isLoading ? (
        <Spinner className="loading" animation="border" />
      ) : (
        <>
          {isError ? (
            <>
              <span className="error">
                Something went wrong, try again later!
              </span>
            </>
          ) : (
            <div className="d-flex justify-content-center">
              <WrapperComponent list={Object.entries(apps)} />
            </div>
          )}
        </>
      )}
    </>
  );
};
