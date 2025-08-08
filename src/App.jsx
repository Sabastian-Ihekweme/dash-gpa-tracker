import OverallCummulativeGPA from './OverallCummulativeGPA.jsx';
import GPAScaleSettings from './GPAScaleSettings';
import SemesterOverview from './SemesterOverview';
import CourseOverview from './CourseOverview';
import './App.css'

function App() {

  return (
    <>
      <OverallCummulativeGPA />
      <GPAScaleSettings />
      <SemesterOverview />
      <CourseOverview />
    </>
  )
}

export default App
