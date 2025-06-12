export default function StudentList() {
  const students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Alice Johnson', age: 19 },
  ];

  

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
}