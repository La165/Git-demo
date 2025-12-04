function Task1()
{
        let EmpfullName = "Mr. Ratan Sir";

  const student = {
    id: 1001,
    stuname: "Lalitha",
    course: "Java Full Stack"
  };
  const fruits = ["apple", "mango", "banana"];
  let fruitsList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    <>
      <h1>This is Lalitha</h1>
      <p>This is ReactJS class</p>

      <h1>Good Evening... {EmpfullName}</h1>

      <h2>Student Details</h2>
      <p>ID: {student.id}</p>
      <p>Name: {student.stuname}</p>
      <p>Course: {student.course}</p>

      <h3>Fruits</h3>
      <ol>{fruitsList}</ol>


      
    </>
  );
}
export default Task1;