import "./App.css";
import Adresse from "./Components/Profile/Adresse";
import FullName from "./Components/Profile/FullName";
import Photo from "./Components/Profile/Photo";
function App() {
  return (
    <div
      className="App"
      style={{
        boxShadow: "5px 10px #888888",
        margin: "50px ",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <FullName />
      <Adresse />

      <Photo />
    </div>
  );
}

export default App;
