import { react, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopAppsByHost } from "../actions/applicationsActions";

export const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAppsByHost());
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
        <>
          {apps.map((app, index) => (
            <>
              <p>{app.name}</p>
              <br />
            </>
          ))}
        </>
      )}
    </>
  );
};
