import { useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import './App.css'
import type { Student } from './types/Student';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  return (
    <>      
      <p>Manage your students efficiently</p>
      <StudentForm onSubmit={(student) => {
        if (editingStudent) {
          // Update existing student
          setStudents(students.map(s => s.id === student.id ? student : s));
        } else {
          // Add new student
          setStudents([...students, student]);
        }
        setEditingStudent(null);
      }} initialData={editingStudent}/>
      <StudentList students={students} onEdit={(student) => setEditingStudent(student)} onDelete={(id) => setStudents(students.filter(s => s.id !== id))} />
    </>
  )
}

export default App
