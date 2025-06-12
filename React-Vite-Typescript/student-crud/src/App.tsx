import { useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>      <p>Manage your students efficiently</p>
      <StudentForm />
      <StudentList />
    </>
  )
}

export default App
