import React from 'react';
import './CourseList.css';
import CourseShape from "./CourseShape";
import CourseListRow from './CourseListRow';
import PropTypes from "prop-types";

const CourseList = ({listCourses}) => {
	return (
		<table id="CourseList">
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true}/>
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
			</thead>
			<tbody>
			{listCourses ? (listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
        ))) : (
			<CourseListRow textFirstCell="No course available yet" />
          )}
		  </tbody>
		</table>
	)
}
CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
  };
  
  CourseList.defaultProps = {
	listCourses: [],
  };

export default CourseList;
