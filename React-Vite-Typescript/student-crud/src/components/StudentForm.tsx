import { useEffect, useState } from "react";
import type { Student } from "../types/Student";

interface Props {
  //initialData: { name?: string; age?: number } | null;
  onSubmit: (student: Student) => void;
  initialData: Student | null;
}

//export default function StudentForm({initialData}: { initialData: { name?: string; age?: number } | null }) {
export default function StudentForm({onSubmit, initialData}: Props) {
//export default function StudentForm({initialData}: { initialData: Student | null }) {
  
  const [name, setName] = useState<string>(initialData?.name || '');
  const [age, setAge] = useState<number>(initialData?.age || 0);
  const [id, setId] = useState<string>(initialData?.id || '');

  //
 useEffect(() => {
    if (initialData) {
      console.log("Editing student:", initialData);
      // Here you would typically set the form data to the initialData
      // For example:
      setName(initialData.name);
      setAge(initialData.age);
      setId(initialData.id);
    } else {
      console.log("Adding new student");
      // Reset the form fields if initialData is null
      setName(name);
      setAge(age);
      setId(Date.now().toString()); // Generate a new ID for a new student
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send data to an API or update state
    const student: Student = {
      id: id || Date.now().toString(), // Use existing ID or generate a new one
      name,
      age,
    };
    onSubmit(student); // Call the onSubmit function with the updated student
    
    console.log("Submitted student:", student);
    // Reset form fields after submission
    setName('');
    setAge(0);
    setId('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Student Name" />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Student Age" />
      <button type="submit" >{initialData ? "Update Student" : "Add Student"}</button>
    </form>
  );
}
