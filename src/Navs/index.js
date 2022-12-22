import * as React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import AuthenticationPage from "../components/pages/AuthenticationPage";
import CandidateOnboarding from "../components/pages/candidate/CandidateOnboarding";
import CandidateProfile from "../components/pages/candidate/CandidateProfile";
import CandidateJobs from "../components/pages/candidate/CandidateJobs";
import CandidateApplications from "../components/pages/candidate/CandidateApplications";
import CandidateConversation from "../components/pages/candidate/CandidateConversation";

import EmployerApplicants from "../components/pages/employer/EmployerApplicants";
import EmployerJobs from "../components/pages/employer/EmployerJobs";
import EmployerOnboarding from "../components/pages/employer/EmployerOnboarding";
import EmployerProfile from "../components/pages/employer/EmployerProfile";
import EmployerConversation from "../components/pages/employer/EmployerConversation";

function Nav() {
  const ProtectedCandidatePages = () => {
    if (true) {
      return <Outlet />;
    } else return <Navigate to="/candidate/auth" />;
  };
  const ProtectedEmployerPages = () => {
    if (true) {
      return <Outlet />;
    } else return <Navigate to="/employer/auth" />;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />;
        <Route
          path="/candidate/auth"
          element={<AuthenticationPage type="candidate" />}
        />
        ;
        <Route element={<ProtectedCandidatePages />}>
          <Route
            path="/candidate/onboarding"
            element={<CandidateOnboarding />}
          />
          <Route path="/candidate/profile" element={<CandidateProfile />} />
          <Route path="/candidate/jobs" element={<CandidateJobs />} />
          <Route
            path="/candidate/applications"
            element={<CandidateApplications />}
          />
          <Route
            path="/candidate/conversations"
            element={<CandidateConversation />}
          />
        </Route>
        <Route
          path="/employer/auth"
          element={<AuthenticationPage type="employer" />}
        />
        ;
        <Route element={<ProtectedEmployerPages />}>
          <Route path="/employer/onboarding" element={<EmployerOnboarding />} />
          <Route path="/employer/profile" element={<EmployerProfile />} />
          <Route path="/employer/jobs" element={<EmployerJobs />} />
          <Route path="/employer/applicants" element={<EmployerApplicants />} />
          <Route
            path="/employer/conversations"
            element={<EmployerConversation />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default Nav;
