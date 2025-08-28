export const studentRoutes = [ 
  { 
    path: "/student/assesments", 
    element: () => import ("../pages/Student/assesments/index.jsx")
  }, 
  { 
    path: "/student/assesments/:id", 
    element: () => import ("../pages/Student/assesments/take") 
  }, 
  { 
    path: "/student/submissions", 
    element: () => import ("../pages/Student/submissions") 
  }, 
  { 
    path: "/student/submissions/:id", 
    element: () => import("../pages/Student/submissions/submission"), 

  }, 
  { 
    path: "/student/*", 
    element: () => import("../pages/404") 
  }, 
];