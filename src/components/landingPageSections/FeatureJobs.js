import React from "react";
import Grid from "@mui/material/Grid";
import JobCard from "../common/JobCard";

function FeatureJobs() {
  return (
    <div className="featureJobs-container">
      <h1>Featured Job Circulars</h1>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {[...Array(8)].map((e, i) => (
          <JobCard key={i}/>
        ))}
      </Grid>
    </div>
  );
}

export default FeatureJobs;
