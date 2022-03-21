import React from 'react';

const Employees =({addToList})=>{
 const [name,setName] = React.useState('');
 const [department,setDepartment] = React.useState('');
 const [gender,setGender] = React.useState('');
 const [role,setRole] = React.useState('');
 const [salary,setSalary] = React.useState('');

    const nameValue=(e)=>{
        setName(e.target.value)
    }
    const departmentValue=(e)=>{
        setDepartment(e.target.value)
    }
    const genderValue=(e)=>{
        setGender(e.target.value)
    }
    const roleValue=(e)=>{
        setRole(e.target.value)
    }
    const salaryValue=(e)=>{
        setSalary(e.target.value)
    }
    return(
        <>
          <input type="text" placeholder="name" onChange={(e)=>nameValue(e)} value = {name}/>
          <br />
          <input type="text" placeholder="department" onChange={(e)=>departmentValue(e)} value = {department}/>
          <br />
          <input type="text" placeholder="gender" onChange={(e)=>genderValue(e)} value = {gender}/>
          <br />
          <input type="text" placeholder="role" onChange={(e)=>roleValue(e)} value = {role}/>
          <br />
          <input type="text" placeholder="salary" onChange={(e)=>salaryValue(e)} value = {salary}/>
          <br />
          <button onClick={()=>addToList(name,department,gender,role,salary)}>add</button>
        </>
    )
}

export default Employees;