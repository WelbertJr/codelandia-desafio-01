import "./styles/global.css";
import { Title } from "./components/Title";
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Title
        color="#FFFFFF"
        className=""
        title="Codelândia"
      />
    </div>
  );
}

export default App;
