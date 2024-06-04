import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/homePage";
import SkillsPage from "./pages/Skills";
import ExperiencePage from "./pages/Experience";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
