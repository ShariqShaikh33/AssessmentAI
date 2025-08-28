import React, { createElement, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import NotFoundPage from "./pages/404";
import { studentRoutes, teacherRoutes } from "./routes";
import TeacherTemplatesPage from "./pages/teacher/templates";

const Home = lazy(() => import("./pages/index"));

const TeacherLayout = lazy(() => import("./components/Teacher/Layout"));
const StudentLayout = lazy(() => import("./components/Student/Layout"));

const generateRouteComponent = (route) => {
  const { path, element } = route;

  return (
    <Route
      key={path}
      path={path}
      element={
        <Suspense fallback={<Loading />}>
          {createElement(lazy(element))}
        </Suspense>
      }
    />
  );
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<TeacherLayout />}>
            {/* {teacherRoutes.map((route) => generateRouteComponent(route))} */}
            <Route path="/teacher/templates" element={<TeacherTemplatesPage/>}></Route>
          </Route>

          <Route element={<StudentLayout />}>
            {studentRoutes.map((route) => generateRouteComponent(route))}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
