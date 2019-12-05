import React, { Fragment } from "react";
import Spinner from "./layouts/Spinner";
import Course from "./Course.component";

export const Courses = ({ courses }) => {
  //If data is not yet retrieved then show spinner else display the retrieved data
  return courses === undefined || courses.length === 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <h5 className="text-center mb-4">
        {/* displaying the length of available courses */}
        Available Courses: {courses.length}
      </h5>
      <div className="row">
        {/* mapping each course data into Course component */}
        {courses.map(item => (
          <Course key={item["Course Id"]} course={item} />
        ))}
      </div>
    </Fragment>
  );
};
