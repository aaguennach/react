import "./App.css";

function App() {
  const nbArt = 6;
  let remise = 0;
  if (nbArt >= 5) {
    remise = 2;
  }
  return (
    <div>
      <h3> Remise </h3>
      <p> Remise est: {remise} %</p>
    </div>
  );
}

export default App;
