import React, { useEffect, useState } from 'react';

function PeoplePage(props){
  const endpoint="https://www.potterapi.com/v1/characters?key=$2a$10$ft0mT0WbfKBtwYv/zjSWjeSAUZd/w/dV5I/nUce3u3OnUls05g9N6";
  const [peopleState, setPeopleState] = useState(null);
  useEffect(()=>{
    fetch(endpoint)
    .then((res)=>res.json())
    .then((res)=>{
      setPeopleState({peopleState:res});
    });
  },[]);
  console.log(peopleState);
  return (
    <>
    <ul>
      {peopleState && peopleState.peopleState.map((char,index)=>(
        <li key={index}>
          {char.name}
        </li>)
      )}
      </ul>
    </>
  )
};

export default PeoplePage;