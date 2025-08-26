import {BookTemplate, LayoutDashboard, TestTubeDiagonal} from 'lucide-react';

export const sidebarTopElements = [
  {
    label: 'Dashboard',
    to: '/student/dashboard',
    icon: <LayoutDashboard/>
  },
  {
    label: "Assessment",
    to: '/student/assessment',
    icon: <TestTubeDiagonal/>
  }
]