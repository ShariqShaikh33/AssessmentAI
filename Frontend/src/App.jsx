import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import { lazy } from 'react';
import { Suspense } from 'react';
import Loading from './components/common/Loading';
import TeacherTemplatePage from './pages/Teacher/Template';
import CreateTemplatePage from './pages/Teacher/Template/Create';
import PageNotFound from './pages/404';
import TeacherAssessmentPage from './pages/Teacher/Assesment';
import CreateAssessmentPage from './pages/Teacher/Assesment/Create';
import StudentLayout from './components/Student/Layout';
import StudentDashboard from './pages/Student/dashboard';
import StudentAssessmentPage from './pages/Student/assessment';
import TakeAssessmentPage from './pages/Student/Assessment/takeAssessment';

const Home = lazy(()=> import("./pages/index"));
const TeacherLayout = lazy(()=> import("./components/Teacher/Layout"));
const TeacherDashboard = lazy(()=> import("./pages/Teacher/Dashboard"));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route element={<TeacherLayout/>}>
            <Route path='teacher/dashboard' element={<TeacherDashboard/>}></Route>
            <Route path='teacher/template' element={<TeacherTemplatePage/>}></Route>
            <Route path="teacher/template/create" element={<CreateTemplatePage/>}></Route>
            <Route path='teacher/template/:id' element={<CreateTemplatePage/>}></Route>
            <Route path='teacher/assessment' element={<TeacherAssessmentPage/>}></Route>
            <Route path='teacher/assessment/create' element={<CreateAssessmentPage/>}></Route>
            <Route path='teacher/assessment/:id' element={<CreateAssessmentPage/>}></Route>

          </Route>
          <Route element={<StudentLayout/>}>
            <Route path='student/dashboard' element={<StudentDashboard/>}></Route>
            <Route path='student/assessment' element={<StudentAssessmentPage/>}></Route>
            <Route path='student/assessment/:id' element={<TakeAssessmentPage/>}></Route>            
          </Route>

            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>  
      </Router>
    </Suspense>
  )
}

export default App
