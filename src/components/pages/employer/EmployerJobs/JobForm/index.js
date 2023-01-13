import React from "react";
import { Button } from "@mui/material";

function JobForm({ setToggleSideBar }) {
  return (
    <div>
      <Button
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => setToggleSideBar("showSideBar")}
      >
        Back
      </Button>
      <h1>Job Form</h1>
    </div>
  );
}

export default JobForm;
