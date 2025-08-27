export const studentRoutes = [
  {
    path: "/student/assesments",
    element: lazy(() => import("../pages/student/assessments")),
  },
  {
    path: "/student/assesments/:id",
    element: () => import("../pages/student/assesments/take"),
  },
  {
    path: "/student/submissions",
    element: () => import("../pages/student/submissions"),
  },
  {
    path: "/student/submissions/:id",
    element: () => import("../pages/student/submissions/submission"),
  },
  {
    path: "/student/*",
    element: () => import("../pages/404"),
  },
];
