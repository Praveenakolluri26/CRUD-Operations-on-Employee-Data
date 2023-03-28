import React, {useState, useRef, useEffect} from "react"
import Swal from 'sweetalert2';

function Add({employees, setEmployees, setIsAdding}){

    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [Age, setAge] = useState('');
    const [Department, setDepartment] = useState('');
    const [Status, setStatus] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!Name || !Address || !Age || !Department || !Status) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            Name,
            Address,
            Age,
            Department,
            Status
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${Name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }




    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add New Employee</h1>
                <label htmlFor="Name">Name</label>
                <input
                    id="Name"
                    type="text"
                    ref={textInput}
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="Address">Address</label>
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
                
                <br></br>
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;