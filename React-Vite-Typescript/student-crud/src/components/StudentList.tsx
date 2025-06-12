import type { Student } from "../types/Student";

/*
interface Props {
    students: { id: number;
        name: string;    
        age: number; }[];       
}
*/
interface Props {
    students: Student[];
    onEdit: (student: Student) => void;
    onDelete: (id: string) => void;
}

export default function StudentList({students, onEdit, onDelete}: Props) {
//export default function StudentList({students}: { students: { id: number; name: string; age: number; }[] }) {
  
/*    
const students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Alice Johnson', age: 19 },
    ];*/

    return (
        <div>
        <h2>Student List</h2>
        <ul>
            {students.map(student => (
            <li key={student.id}>
                {student.name} - Age: {student.age}
                <button onClick={() => onEdit(student)}>Edit</button>
                <button onClick={() => onDelete(student.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
}