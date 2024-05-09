import './App.css';
import {FlexColumnContainer} from "./visual_components/FlexColumnContainer.component";
import {Provider} from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <FlexColumnContainer/>
      </header>
    </div>
  );
}

export default App;
