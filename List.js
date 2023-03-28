import React,{useState} from "react"
import {Button} from "react-bootstrap"
import Modal from "./Modal/Modal";

export default function List({employees, handleEdit, handleDelete}){
    const [show,setShow] = useState(false)
    const [empDeets,setEmpDeets] = useState()

    const showEmployeeDetails = (employeeIndex) => {
        const employee = employees[employeeIndex]
        setEmpDeets(employee)
        setShow(true)
        
    }

    
    return (
        
        <div className="contain-table">
        <Modal passingdata = {empDeets} onClose={()=>setShow(false)} show={show} />
            <table className="striped-table">
            <thead>
            <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Department</th>
            <th>Status</th>
            <th colSpan={2} className="text-center">
                Actions
            </th>
            </tr>
            </thead>
            <tbody>
            
            {

                employees.map((employee, i) => (
                    <tr id="id" key={employee.id}>
                    <td><button onClick={()=>showEmployeeDetails(i)}>{i + 1}</button></td>
                    <td id="Name" >{employee.Name}</td>
                    <td id="Address">{employee.Address}</td>
                    <td id="Age">{employee.Age}</td>
                    <td id="Dept">{employee.Department}</td>
                    <td id="Sts">{employee.Status} </td>
                    <td className="text-right">
                    <button onClick={() => handleEdit(employee.id)}
                    className="button muted-button">Edit</button>
                    </td>
                    <td className="text-left">
                    <button onClick={() => handleDelete(employee.id)}
                    className="button muted-button">Delete</button>
                    </td>
                    
                    </tr>
                    ))
                    
                    }
            </tbody>
            </table>
        </div>
    );
}