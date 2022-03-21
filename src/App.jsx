import './App.css';
import React from 'react';
import Employees from './components/Employees';

function App() {
   
  const [list,setList] = React.useState([]);

  React.useEffect(()=>{
    takeDataShow()
  },[])


  const takeDataShow = ()=>{
    fetch(`http://localhost:3001/employee`)
    .then((res)=>res.json())
    .then((res)=>setList(res))
    .catch((err)=>console.log(err))
  }

 const addToList=(name,department,gender,role,salary)=>{
  //  console.log(name,department,gender,role,salary);
  let payload = {
    name:name,
    department:department,
    gender:gender,
    role:role,
    salary:salary,
  }
  // setList([...list,payload]);
  // console.log(list)

    let payloadJson = JSON.stringify(payload);
   fetch(`http://localhost:3001/employee`,{
    method: 'POST',
    body:payloadJson,
    headers:{
      "Content-Type": "application/json",
    }
   })
   .then((res)=>takeDataShow())
   .catch((err)=>console.log(err));
  
 }

 const showMarketing=()=>{
  let updated = list.filter((item)=> (item.department === 'Marketing'));
   setList(updated)
 }
 const showHR=()=>{
  let updated = list.filter((item)=> (item.department === 'HR'));
   setList(updated)
 }
 const ShowIT=()=>{
   let updated = list.filter((item)=> (item.department === 'IT'));
   setList(updated)
 }
 const ShowFinance=()=>{
  let updated = list.filter((item)=> (item.department === 'Finance'));
   setList(updated)
 }


 const ascending=()=>{
  fetch(`http://localhost:3001/employee`)
  .then((res)=>res.json())
  .then((res)=>{
    let updated = res.sort((a,b)=> (+a.salary) - (+b.salary));
    // console.log(list.salary)
    setList(updated)
  })
  .catch((err)=>console.log(err))

    
 }

 const descending=()=>{
  fetch(`http://localhost:3001/employee`)
  .then((res)=>res.json())
  .then((res)=>{
    let updated = res.sort((a,b)=> (+b.salary) - (+a.salary));
    // console.log(list.salary)
    setList(updated)
  })
  .catch((err)=>console.log(err))

 }


  return (
    <div className="App">
       <Employees addToList={addToList}/>
          <br />
          <br />
          <button>show all department</button>
          <button onClick={showMarketing}>Show Marketing</button>
          <button onClick={showHR}>Show HR</button>
          <button onClick={ShowIT}>Show IT</button>
          <button onClick={ShowFinance}>Show Finance</button>

            <button onClick={ascending}>sort by ascending</button>
            <button onClick={descending}>sort by descending</button>
          <br />
          <br />

      {
        
      list.map((item)=>{
        return (
          <>
          <div className="EmployList">
             <div> Name : {item.name}</div>
             <div>Department : {item.department}</div>
             <div> Gender : {item.gender}</div>
             <div> Role : {item.role}</div>
             <div> Salary : {item.salary}</div>
          </div>
          
          </>
      )
        
      })
     
      }
    </div>
  );
}

export default App;
