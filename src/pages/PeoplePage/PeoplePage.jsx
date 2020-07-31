import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import "bootstrap/dist/css/bootstrap.css";
//need to refactor key in product env
import key from '../../utils/dev';

function PeoplePage(props){
  const endpoint=`https://www.potterapi.com/v1/characters?key=${key.API_KEY}`;
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
  
  // convert peopleData arry to obj
  console.log(peopleData);

   
  return (
    <>
    <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={tableData} searchTop searchBottom={false} />
    <ul>
    {peopleData.map((char,index)=>(
      <li>
        {char.name}
      </li>
    ))}
    </ul>
    </>
  )
};

export default PeoplePage;