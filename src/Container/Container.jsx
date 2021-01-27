import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApps } from "../actions/applicationsActions";
import { WrapperComponent } from "../components/WrapperComponent/WrapperComponent";
import { Spinner } from "react-bootstrap";

import "../components/loading.scss";

export const Container = () => {
  const dispatch = useDispatch();

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
        <Spinner className="loading" animation="border" />
      ) : (
        <div className="d-flex justify-content-center">
          <WrapperComponent list={Object.entries(apps)} />
        </div>
      )}
    </>
  );
};
