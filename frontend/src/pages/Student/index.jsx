import React from "react";
import { Navigate } from "react-router-dom";

function StudentHome() {
  return <Navigate to={"/student/assesments"} replace={true} />;
}

export default StudentHome;
