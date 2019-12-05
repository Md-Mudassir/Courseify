import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/layouts/Navbar";
import { Courses } from "./components/Courses.component";
import { Search } from "./components/Search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      course_list: [],
      searchfield: ""
    };
  }

  async componentDidMount() {
    //Fetching data from below end point
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://nut-case.s3.amazonaws.com/coursessc.json"
      )
      .then(res => {
        //storing the fetched data into state
        this.setState({ course_list: res.data });
      });
  }
  //Dynamically setting the state when the user types
  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { course_list, searchfield } = this.state;
    //Filtering data as per user search input
    const course_filtered = course_list.filter(
      course =>
        course.Provider.toLowerCase().includes(searchfield.toLowerCase()) ||
        course["Child Subject"]
          .toLowerCase()
          .includes(searchfield.toLowerCase())
    );
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Search
            placeholder="Search By Provider or Subject"
            handleChange={this.handleChange}
          />
          <Courses courses={course_filtered}></Courses>
        </div>
      </Fragment>
    );
  }
}
export default App;
