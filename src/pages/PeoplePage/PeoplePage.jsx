import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import "bootstrap/dist/css/bootstrap.css";
import { Table } from 'react-bootstrap';
//need to refactor key in product env
 

function PeoplePage(props){
  const endpoint='https://www.potterapi.com/v1/characters?key=$2a$10$ft0mT0WbfKBtwYv/zjSWjeSAUZd/w/dV5I/nUce3u3OnUls05g9N6';
  const [peopleData, setPeopleData] = useState([]);
  const[tableData, setTableData] = useState({});


  useEffect(()=>{
    fetch(endpoint)
    .then((res)=>res.json())
    .then((res)=>{
      setPeopleData(res);
    })},[]);



  useEffect((peopleData)=>{
      setTableData(
        {columns:[
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'TableData',
              'aria-label': 'Name',
            },
          },
          {
            label:'Role',
            field:'role',
            width:'100',
          }
        ],
        rows:peopleData
    }
  )

  },[]);
  
  console.log(peopleData);

  return (
    <div className="people-table-container">
    {/* <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={tableData} searchTop searchBottom={false} /> */}
    <Table striped bordered hover size='sm'>
    <thead>
    <tr>
      <th>Full Name</th>
      <th>Role</th>
      <th>house</th>
      <th>School</th>
    </tr>
  </thead>
  <tbody>
    { peopleData.map((char,index)=>(
       <tr>
          <td>{char.name}</td>
          <td>{char.role}</td>
          <td>{char.house}</td>
          <td>{char.school}</td>
        </tr>
    ))}
    </tbody>
  
    </Table>
    </div>
  )
};

export default PeoplePage;