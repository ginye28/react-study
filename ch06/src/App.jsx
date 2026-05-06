import { useState } from 'react'

function App() {
  const [ currentPage, setCurrentPage ] = useState(<></>);
  const [ inputValue, setInputValue ] = useState(<></>);
  const [ content, setContent ] = useState(<></>);

  const [ pages, setPages ] = useState({
    number: <Number />,
    table: <Table />,
    table2: <Table2 />,
  });

  const handlePageButtonOnClick = (e) => {
    setCurrentPage(pages[e.target.value]);
  }

  return (
    <>
    <header>
      <button value={"number"} onClick={handlePageButtonOnClick}>Number</button>
      <button value={"table"} onClick={handlePageButtonOnClick}>Table</button>
      <button value={"table2"} onClick={handlePageButtonOnClick}>Table2</button>
    </header>
    <main>
      {currentPage}
    </main>
    </>
  )
}

function Number() {
  const numbers = [1,2,3,4,5,6,7,8,9];
  const h1Numbers = numbers.map(n => <h1>{n}</h1>);
  return (
    <>
      {numbers}
      {h1Numbers}
      {numbers.map(n => <h1>{n}</h1>)}
    </>
  )
}

function Table() {
  const students = [
    {no: 1, name: "jhj", age: 21},
    {no: 2, name: "jhk", age: 22},
    {no: 3, name: "jhl", age: 23},
    {no: 4, name: "jhm", age: 24},
    {no: 5, name: "jhn", age: 25},
  ];

  return(
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(students => 
          <tr>
            <td>{students.no}</td>
            <td>{students.name}</td>
            <td>{students.age}</td>
          </tr>)
        }
      </tbody>
    </table>
  )
}

function Table2() {
  const [ students, setStudents ] = useState([]);

  const [ values, setValues ] = useState({
    no: "",
    name: "",
    age: "",
  })

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddOnClick = (e) => {
    setStudents([ ...students, {...values}]);
  }

  return(
    <>
    <div>
      <input type="text" name='no' value={values.no} onChange={handleOnChange}/>
      <input type="text" name='name' value={values.name} onChange={handleOnChange}/>
      <input type="text" name='age' value={values.age} onChange={handleOnChange}/>
      <button onClick={handleAddOnClick}>추가</button>
    </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map(students => 
            <tr>
              <td>{students.no}</td>
              <td>{students.name}</td>
              <td>{students.age}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  )
}

export default App
