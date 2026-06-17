import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Resume from "./pages/Resume";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import History from "./pages/History";
import QuestionGenerator from "./pages/QuestionGenerator";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import PracticeZone from "./pages/PracticeZone";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Routes>
<Route
  path="/login"
  element={<Login />}
/>
        <Route
  path="/"
  element={<Landing />}
/>

<Route
  path="/dashboard"
  element={<Dashboard />}
/>

        <Route
          path="/questions"
          element={<QuestionGenerator />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/history"
          element={<History />}
        />
<Route
  path="/practice"
  element={<PracticeZone />}
/>
        <Route
          path="/settings"
          element={<Settings />}
        />
<Route
  path="/resume"
  element={<Resume />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;