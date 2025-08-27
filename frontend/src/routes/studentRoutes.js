// src/routes/studentRoutes.js
import { lazy } from "react";

const StudentAssesments = lazy(() => import("../pages/student/assesments"));
const TakeAssesment = lazy(() => import("../pages/student/assesments/take"));
const Submissions = lazy(() => import("../pages/student/submissions"));
const Submission = lazy(() => import("../pages/student/submissions/submission"));
const NotFound = lazy(() => import("../pages/404"));

export const studentRoutes = [
  {
    path: "/student/assesments",
    element: <StudentAssesments />,
  },
  {
    path: "/student/assesments/:id",
    element: <TakeAssesment />,
  },
  {
    path: "/student/submissions",
    element: <Submissions />,
  },
  {
    path: "/student/submissions/:id",
    element: <Submission />,
  },
  {
    path: "/student/*",
    element: <NotFound />,
  },
];
