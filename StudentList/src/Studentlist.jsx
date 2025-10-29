
function StudentList() {
  
  const students = ["Arya", "kiran", "Swarupaa", "Shashi", "Ravi"];

  return (
    <div>
    
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

