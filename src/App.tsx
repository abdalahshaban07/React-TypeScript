import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "John",
    last: "Doe",
  };

  const nameList = [
    {
      first: "a",
      last: "b",
    },
    {
      first: "c",
      last: "d",
    },
    {
      first: "e",
      last: "f",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name={"abdalah"} isLoggedIn={true} />
     <Greet name={"abdalah"} messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> 
      <Status status="loading" />
      <Heading>placeholder text</Heading>
      <Oscar>
        <Heading>oscar with heading</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event.target.value, "vaa");
        }}
      />*/}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
    </div>
  );
}

export default App;
