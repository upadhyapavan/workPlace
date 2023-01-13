import React from "react";
import { Button } from "@mui/material";

function SideBar({ setToggleSideBar }) {
  return (
    <div>
      <Button
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => setToggleSideBar("showJobForm")}
      >
        Post a Job
      </Button>
      <h1>SideBar</h1>
    </div>
  );
}

export default SideBar;
