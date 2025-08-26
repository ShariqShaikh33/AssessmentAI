export const studentRoutes = [
  {
    path: "/student",
    element: () => import("../pages/Student"),
  },
  // {
  //   path: "/student/dashboard",
  //   element: () => import("../pages/student/dashboard"),
  // },
  {
    path: "/student/assesments",
    element: () => import("../pages/Student/assesments"),
  },
  {
    path: "/student/assesments/:id",
    element: () => import("../pages/Student/assesments/take"),
  },
  {
    path: "/student/submissions",
    element: () => import("../pages/Student/submissions"),
  },
  {
    path: "/student/submissions/:id",
    element: () => import("../pages/Student/submissions/submission"),
  },
  {
    path: "/student/*",
    element: () => import("../pages/404"),
  },
];
