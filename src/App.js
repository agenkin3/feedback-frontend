import React from 'react';
import {connect} from 'react-redux'
import {fetchStudents} from './actions/fetchStudents'
import StudentsContainer from './containers/StudentsContainer'

class App extends React.Component {
  
render() {
    return (
    <div className="App">
        <StudentsContainer/>
    </div>
    );
  }
}

export default App;