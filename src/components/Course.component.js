import React, { Fragment } from "react";

const Course = ({ course }) => {
  return (
    <Fragment>
      <div className="col-md-6">
        <div className="card border-dark mb-3">
          <div className="card-header">{course["Provider"]}</div>
          <div className="card-body text-dark">
            <h5 className="card-title">{course["Course Name"]}</h5>
            <hr />
            <p className="card-text">{course["Child Subject"]}</p>
            <p className="card-text">Length: {course["Length"]}</p>
            <p className="card-text">
              Next Session: {course["Next Session Date"]}
            </p>
            <a
              href={course["Url"]}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mr-3"
            >
              View Course
            </a>
            <a
              href={course["Video(Url)"]}
              target="_blank"
              rel="noopener noreferrer"
              className="btn  btn-info"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Course;
