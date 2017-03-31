import React, { Component } from 'react';
import './App.css';
import info from "./dataModel"

class App extends Component {
 
  render() {
    var studentInfo = info.studentsInfo;
    var headerCount = studentInfo.headers.length;
    var studentCount = studentInfo.students.length;
    return (
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">
          <h4>The studentsInfo structure contains two lists:</h4>
          <p>One with all the required headers, which is a total of ({studentInfo.headers.length})</p>
          <p>One with all the Students, whis is a total of ({studentInfo.students.length})</p>
          <p>Use the empty table below, or move it (you must eventually) into a separate component</p>
          <table className="table">
            <tr>
              <th>Students:</th>
              <th>({studentInfo.headers[0].courseName})</th>
              <th>({studentInfo.headers[1].courseName})</th>
              <th>({studentInfo.headers[2].courseName})</th>
              <th>Average</th>
            </tr>
            <tr>
              <td>({studentInfo.students[0].name})</td>
              <td>({studentInfo.students[0].grades[0].grade})</td>
              <td>({studentInfo.students[0].grades[1].grade})</td>
            </tr>
            <tr>
              <td>({studentInfo.students[1].name})</td>
              <td>({studentInfo.students[1].grades[0].grade})</td>
              <td>({studentInfo.students[1].grades[1].grade})</td>
            </tr>
            <tr>
              <td>({studentInfo.students[2].name})</td>
              <td>({studentInfo.students[2].grades[0].grade})</td>
              <td>({studentInfo.students[2].grades[1].grade})</td>
            </tr>
            <tr>
              <td>({studentInfo.students[3].name})</td>
              <td>({studentInfo.students[3].grades[0].grade})</td>
              <td>({studentInfo.students[3].grades[1].grade})</td>
            </tr>
            <thead>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
