import "./App.css";
import Timeline from "./components/Timeline.tsx";
import { DeviceProvider } from "./context/DeviceContext.tsx";

function App() {
  return (
    <div className="App">
      <DeviceProvider>
        <Timeline />
      </DeviceProvider>
    </div>
  );
}

export default App;
