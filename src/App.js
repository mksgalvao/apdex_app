import { Container } from "./Container/Container";
import { Provider } from "react-redux";

import configureStore from "./store/index";

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
