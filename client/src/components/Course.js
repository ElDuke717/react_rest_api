import React from 'react';
import { Link } from "react-router-dom";


//This component is used to populate the Courses component's list of courses. Props are passed from Courses
const Course = (props) => {
    //  console.log(props.info)
    //  console.log(props.title)
     console.log(props.id)
    return(
            <Link className="course--module course--link" to={{pathname: `coursedetail`, state: { courseId: 'Chicken' } }} >
                    <h2 className="course--label">Course</h2>
                    <h3 className="course--title">{props.title}</h3>
                    <p>{props.id}</p>
                    <p>{props.courseLink}</p>
            </Link>

    )
}

export default Course;