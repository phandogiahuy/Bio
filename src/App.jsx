import { Divider } from "antd";
import Header from "../src/components/Header";
import Infor from "./components/Infor";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import Reward from "./components/Reward";
import Education from "./components/Education";
import Project from "./components/Project";
import Footer from "./components/Footer";
function App() {
  return (
    <div style={{ backgroundColor: "#f7ffef", overflow: "hidden" }}>
      <Header />
      <Infor />
      <Divider />
      <Skills />
      <Divider />
      <Certification />
      <Divider />
      <Education />
      <Divider />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
