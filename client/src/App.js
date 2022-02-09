import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

//import app elements
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import DeleteCourse from './components/DeleteCourse';


function App() {
  
  return (
    <Router>
      <div> 
      <Header />
      <Routes>
        <Route exact path="/" element={<Courses/>} />
        <Route path="/courses" element={<Courses/>} />
        {/* course id must be passed via context in order to avoid making the API call in App and have to do prop drilling. Since we're 
        making the API call separately in Courses and CourseDetail, we need a way to pass the id between a specific Course when clicked
        and CourseDetail so that the data for the specific course can be queried via the API's URL*/}
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/createcourse" element={<CreateCourse/>} />
        <Route path="/updatecourse" element={<UpdateCourse/>} />
        <Route path="/signin" element={<UserSignIn/>} />
        <Route path="/signup" element={<UserSignUp/>} />
        <Route path="/signout" element={<UserSignOut/>} />
        <Route path="/deletecourse" element={<DeleteCourse/>} />
      </Routes>  
      </div>
    </Router>
  );
}

export default App;
