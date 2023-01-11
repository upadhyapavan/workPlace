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
import EmployerHoc from "../HOC/EmployerHoc";
import CandidateHoc from "../HOC/CandidateHoc";

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
        <Route element={<ProtectedCandidatePages />}>
          <Route
            path="/candidate/onboarding"
            element={<CandidateOnboarding />}
          />
          <Route
            path="/candidate/profile"
            element={
              <CandidateHoc>
                <CandidateProfile />
              </CandidateHoc>
            }
          />
          <Route
            path="/candidate/jobs"
            element={
              <CandidateHoc>
                <CandidateJobs />
              </CandidateHoc>
            }
          />
          <Route
            path="/candidate/applications"
            element={
              <CandidateHoc>
                <CandidateApplications />
              </CandidateHoc>
            }
          />
          <Route
            path="/candidate/conversations"
            element={
              <CandidateHoc>
                <CandidateConversation />
              </CandidateHoc>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route
          path="/employer/auth"
          element={<AuthenticationPage type="employer" />}
        />
        <Route path="/employer/onboarding" element={<EmployerOnboarding />} />
      </Routes>
      {/* <Route element={<ProtectedEmployerPages />}> */}
      {/* <EmployerHoc> */}
      <Routes>
        <Route
          path="/employer/profile"
          element={
            <EmployerHoc>
              <EmployerProfile />
            </EmployerHoc>
          }
        />
        <Route
          path="/employer/jobs"
          element={
            <EmployerHoc>
              <EmployerJobs />
            </EmployerHoc>
          }
        />
        <Route
          path="/employer/applicants"
          element={
            <EmployerHoc>
              <EmployerApplicants />
            </EmployerHoc>
          }
        />
        <Route
          path="/employer/conversations"
          element={
            <EmployerHoc>
              <EmployerConversation />
            </EmployerHoc>
          }
        />
      </Routes>
      {/* </EmployerHoc> */}
      {/* </Route> */}
    </Router>
  );
}

export default Nav;
