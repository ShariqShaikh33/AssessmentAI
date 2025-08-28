export const teacherRoutes = [
  //   Templates Pages
  {
    path: "/teacher/templates",
    element: () => import("../pages/Teacher/templates"),
  },
  {
    path: "/teacher/templates/create",
    element: () => import("../pages/Teacher/templates/create"),
  },
  {
    path: "/teacher/templates/:id",
    element: () => import("../pages/Teacher/templates/create"),
  },
  //   Assesments Pages
  {
    path: "/teacher/assesments",
    element: () => import("../pages/Teacher/assesments"),
  },
  {
    path: "/teacher/assesments/create",
    element: () => import("../pages/Teacher/assesments/create"),
  },
  {
    path: "/teacher/assesments/:id",
    element: () => import("../pages/Teacher/assesments/create"),
  },
  // Submissions Pages
  {
    path: "/teacher/submissions",
    element: () => import("../pages/Teacher/submissions"),
  },
  {
    path: "/teacher/*",
    element: () => import("../pages/404"),
  },
];
