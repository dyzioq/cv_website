import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/homePage";
import SkillsPage from "./pages/Skills";
import ExperiencePage from "./pages/Experience";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="https://dyzioq.github.io/cv_website/"
            element={<HomePage />}
          />
          <Route
            path="https://dyzioq.github.io/cv_website/skills"
            element={<SkillsPage />}
          />
          <Route
            path="https://dyzioq.github.io/cv_website/experience"
            element={<ExperiencePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
