import React, { useState, useEffect } from 'react';
import StudentProfile from 'components/StudentProfile/StudentProfile';
import { Wrapper } from 'components/SchoolNews/SchoolNews.styles';

import axios from "axios"

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then(({ data }) => {
        console.log(data)
        setStudents(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <Wrapper>
      {students.length 
      ? students.map(student =><StudentProfile key={student._id} studentData={student}/> )
      : <h2>No students</h2>}
    </Wrapper>
  );
}

StudentsList.propTypes = {};

export default StudentsList;
