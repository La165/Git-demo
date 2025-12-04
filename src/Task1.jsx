function Task1()
{
        let EmpfullName = "Mr. Ratan Sir";

  const product = {
    id: 1001,
    name: "Laptop",
    brand: "Lenovo"
  };
  const fruits = ["apple", "mango", "banana"];
  let fruitsList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    <>
      <h1>This is Lalitha</h1>
      <p>This is ReactJS class</p>

      <h1>Good Evening... {EmpfullName}</h1>

      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>

      
      <h3>Fruits</h3>
      <ol>{fruitsList}</ol>


      
    </>
  );
}
export default Task1;