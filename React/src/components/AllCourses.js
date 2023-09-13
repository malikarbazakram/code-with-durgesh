import React, { useState } from "react";
import Course from "./Course";



const AllCourses = () => {
    
    const [courses, setCourses] = useState ([
        {title: "Java Course",description: "This is demo Testing"},
        {title: "Django Course",description: "This is Just Testing"},
        {title: "ReactJs Course",description: "This is Just Testing"},
        {title: "Angular Course",description: "This is Just Testing"},


    ])
    return (
        <div> 
            <h1>All Courses!</h1>
            <p>List of Courses are as follows:</p>
            
                {
                    courses.length > 0 
                    ? courses.map((item) => <Course course = {item} /> )
                    : "No course available"
                }
        </div>
    )
}
export default AllCourses;