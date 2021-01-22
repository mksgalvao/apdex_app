import { Container } from "./components/Container";
import { Provider } from "react-redux";

import configureStore from "./reducers/store";

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
};

export default App;
