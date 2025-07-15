import {BookTemplate, LayoutDashboard, TestTubeDiagonal} from 'lucide-react';

export const sidebarTopElements = [
  {
    label: 'Dashboard',
    to: '/teacher/dashboard',
    icon: <LayoutDashboard/>
  },
  { 
    label: 'Template',
    to: '/teacher/template',
    icon: <BookTemplate/>
  },
  {
    label: "Assessment",
    to: '/teacher/assessment',
    icon: <TestTubeDiagonal/>
  }
]