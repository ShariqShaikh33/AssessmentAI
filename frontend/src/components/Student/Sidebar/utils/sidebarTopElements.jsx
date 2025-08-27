import {
  LayoutDashboard,
  BookTemplate,
  TestTubeDiagonal,
  Send,
} from "lucide-react";

export const sidebarTopElements = [
  {
    label: "Assesments",
    to: "/student/assesments",
    icon: <TestTubeDiagonal />,
  },
  {
    label: "Submissions",
    to: "/student/submissions",
    icon: <Send />,
  },
];
