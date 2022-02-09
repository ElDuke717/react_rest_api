import React, { useState, useEffect, useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import axios from 'axios';
// import { CourseContext } from './Context/Context';


//Click on "Update Course" button from Courses.js, then import course specific information from the course props and use to populate data in this view
//Course details are passed via props from Courses.js

//import course specific information from the course object
const CourseDetail = (props) => {
  //useState sets the state for the Courses component.  setCourses is called when the axios call is made to the server and the response is saved into the state.
    const [ course, setCourse ] = useState([]);
    // const { courses } = useContext(CourseContext);
    // const courseLength = courses.length;

//How could we get `http://localhost:5000/api/courses/${props.match.params.id}`  to work?
  const getData = () => {
      axios.get(`http://localhost:5000/api/courses/2`)
      //The response from axios request is saved into the state, pushed into the array, and then the array is returned.
      .then(response => setCourse(response.data),
          console.log('The request has run'),
          console.log(course))
          .catch(error => {
              console.log(error.message)
          });    
      }
  //useEffect is called after the component is rendered and allows the axios fetch request to complete before it proceeds. 
  useEffect(() => {
      getData();
  }, []);
  
    // console.log(courseLength);
  
    return (
   
    <div id="root">
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <a className="button" href="/updatecourse">Update Course</a>
                    <a className="button" href="deletecourse">Delete Course</a>
                    <a className="button button-secondary" href="/courses">Return to List</a>
                </div>
            </div>
            
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            {/* <p>By {course.user.firstName} {course.user.lastName}</p> */}

                            <p>{course.description}</p>
                            
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <li>{course.materialsNeeded}</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>

    );
  };

  export default CourseDetail;