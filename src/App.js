import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
