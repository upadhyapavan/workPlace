import React, { useState } from "react";
import { Grid } from "@mui/material";
import SideBar from "./SideBar";
import JobForm from "./JobForm";

function EmployerJobs() {
  const [toggleSideBar, setToggleSideBar] = useState("showSideBar");
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: {
            xs: toggleSideBar === "showSideBar" ? "block" : "none",
            md: "block",
          },
        }}
      >
        <SideBar setToggleSideBar={setToggleSideBar}></SideBar>
      </Grid>
      <Grid
        item
        xs={12}
        md={9}
        sx={{
          display: {
            xs: toggleSideBar === "showJobForm" ? "block" : "none",
            md: "block",
          },
        }}
      >
        <JobForm setToggleSideBar={setToggleSideBar}></JobForm>
      </Grid>
    </Grid>
  );
}

export default EmployerJobs;
