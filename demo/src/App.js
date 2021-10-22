import "antd/dist/antd.css";
import { Typography } from "antd";
import MyComponent from "./Module/MyComponent.jsx";

const { Title } = Typography;

function App() {
  const name = "Noffy";
  const object = {
    fullName: "Nofij Barudwale",
  };
  const array = [
    { key: 1, name: "John", id: 1 },
    { key: 2, name: "Smith", id: 2 },
    { key: 3, name: "Devid", id: 3 },
  ];
  function demo() {
    console.log("Function Logged");
  }
  return (
    <MyComponent
      string={name} // String
      object={object} // Object
      boolean={true} // Boolean
      array={array} // Array
      func={demo} // Function
      Component={component} //Component
    />
  );
}
function component() {
  return <Title level={5}>This is Component</Title>;
}
export default App;
