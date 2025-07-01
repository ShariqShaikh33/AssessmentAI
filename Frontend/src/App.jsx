import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import { lazy } from 'react';
import { Suspense } from 'react';
import Loading from './components/common/Loading';
import TeacherTemplatePage from './pages/Teacher/Template';
import CreateTemplatePage from './pages/Teacher/Create';

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
          </Route>
        </Routes>  
      </Router>
    </Suspense>
  )
}

export default App
