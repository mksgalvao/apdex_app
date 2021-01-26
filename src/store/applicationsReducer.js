import {
  GET_APPLICATIONS_ERROR,
  GET_APPLICATIONS_SUCCESS,
  GET_APPLICATIONS_LOADING,
} from "../actions/applicationsActions";

const initialState = {
  loadingGetApplications: true,
  errorGetApplications: false,
  applications: [],
};

const ApplicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPLICATIONS_LOADING:
      return {
        loadingGetApplications: true,
      };
    case GET_APPLICATIONS_ERROR:
      return {
        errorGetApplications: true,
        loadingGetApplications: false,
      };
    case GET_APPLICATIONS_SUCCESS:
      return {
        loadingGetApplications: false,
        applications: action.data,
      };

    default:
      return { ...state };
  }
};

export default ApplicationsReducer;
