import Parent from "./Components/Parent";

function App(props) {
  let customList = [
    { id: 1, voterName: "Paul", eligibility: "Yes", city: "NewYork" },
    { id: 2, voterName: "Eva", eligibility: "No", city: "Santiago" },
    { id: 3, voterName: "Veronica", eligibility: "Yes", city: "NewYork" },
  ];
  return (
    <div>
      <Parent customList={customList} />
    </div>
  );
}

export default App;
