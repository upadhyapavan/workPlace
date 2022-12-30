import React from "react";
import SolutionCard from "../common/SolutionCard";
import "./landingPage.css";
import Grid from "@mui/material/Grid";
import iconMarketing from "../../assets/marketing_icon.svg";
import iconCustomerSupport from "../../assets/customer_support.svg";
import iconDesignDev from "../../assets/d&d.svg";
import iconFinMgmt from "../../assets/fm.svg";
import iconGovJobs from "../../assets/govt_jobs.svg";
import iconHRD from "../../assets/hr&d.svg";
import iconPM from "../../assets/project_management.svg";
import iconBC from "../../assets/business_consulting.svg";

const dataList = [
  {
    title: "Marketing & Communication",
    description: "237 Jobs Available",
    location: iconMarketing,
  },
  {
    title: "Design & Development",
    description: "237 Jobs Available",
    location: iconDesignDev,
  },
  {
    title: "Human Research & Development",
    description: "237 Jobs Available",
    location: iconHRD,
  },
  {
    title: "Finance Management",
    description: "237 Jobs Available",
    location: iconFinMgmt,
  },
  {
    title: "Government Jobs",
    description: "237 Jobs Available",
    location: iconGovJobs,
  },
  {
    title: "Business & Consulting",
    description: "237 Jobs Available",
    location: iconBC,
  },
  {
    title: "Customer Support Care",
    description: "237 Jobs Available",
    location: iconCustomerSupport,
  },
  {
    title: "Project Management",
    description: "237 Jobs Available",
    location: iconPM,
  },
];

function OnePlatform() {
  return (
    <div className="onePlatformContainer">
      <h1>
        One Platform Many <span>Solutions</span>
      </h1>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {dataList.map((e, i) => (
          <SolutionCard
            title={e.title}
            description={e.description}
            icon={e.location}
            key={i}
          />
        ))}
      </Grid>
    </div>
  );
}

export default OnePlatform;
