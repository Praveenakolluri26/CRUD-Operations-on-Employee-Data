import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [Name, setName] = useState(selectedEmployee.Name);
    const [Address, setAddress] = useState(selectedEmployee.Address);
    const [Age, setAge] = useState(selectedEmployee.Age);
    const [Department, setDepartment] = useState(selectedEmployee.Department);
    const [Status, setStatus] = useState(selectedEmployee.Status);

    const handleUpStatus = e => {
        e.preventDefault();

        if (!Name || !Address || !Age || !Department || !Status) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            Name,
            Address,
            Age,
            Department,
            Status
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.Name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpStatus}>
                <h1>Edit Employee</h1>
                <label htmlFor="Name">First Name</label>
                <input
                    id="Name"
                    type="text"
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="Address">Last Name</label>
                <input
                    id="Address"
                    type="text"
                    name="Address"
                    value={Address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="Age">Age</label>
                <input
                    id="Age"
                    type="number"
                    name="Age"
                    value={Age}
                    onChange={e => setAge(e.target.value)}
                />
                <label htmlFor="Department" >Department</label>
                <select id="Department" onChange={e => setDepartment(e.target.value)}>
                <option value="Select Department">Select Department</option>
                <option value="Developer">Developer</option>
                <option value="Tester">Tester</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                </select>

                <label htmlFor="Status" >Status</label>
                <select id="Staus" onChange={e => setStatus(e.target.value)}>
                <option value="Select Status">Select Status</option>
                <option value="Remote Location">Remote Location</option>
                <option value="Contract Employee">Contract Employee</option>
                <option value="Full-Time">Full-Time</option>
                </select>
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit