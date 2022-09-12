import "./App.css";
import MyCheckbox from "./components/MyCheckbox";
import MyInput from "./components/MyInput";
import MyRadio from "./components/MyRadio";
import MySelect from "./components/MySelect";
import MyTextArea from "./components/MyTextArea";

function App() {
  return (
    <div className="App">
      <MyInput/>
      <MyTextArea />
      <MyCheckbox />
      <MySelect />
      <MyRadio />
    </div>
  );
}

export default App;
