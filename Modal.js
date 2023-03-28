import React,{useState} from 'react'
import './Modal.css';
import List from '../List';
import { employeesData } from '../../data';
import Maps from '../Maps';
import SearchBox from '../SearchBox';



const Modal = props => {
    const employ = props.passingdata;


    const [show,setShow] = useState(false)
    const [selectPosition, setSelectPosition] = useState();
    
    if(!props.show){
        return null
    }
    else{
       
        return (
            
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>Employee Data</h4>
                    </div>
                    <div className='modal-body'>
                    <table>
                        <tr><td><strong>ID</strong></td><td>{employ.id}</td></tr>
                        <tr><td><strong>Name</strong></td><td>{employ.Name}</td></tr>
                        <tr><td><strong>Age</strong></td><td>{employ.Age}</td></tr>
                        <tr><td><strong>Address</strong></td><td>{employ.Address}</td></tr>
                        <tr><td><strong>Department</strong></td><td>{employ.Department}</td></tr>
                        <tr><td><strong>Status</strong></td><td>{employ.Status}</td></tr>
                    </table>
                    <div
                    style={{
                        display:"flex",
                        width:"50vw",
                        height:"40vh"
                    }}>
                    <div style={{width:"30vw",height:"70%"}}>
                    <Maps selectPosition={selectPosition} />
                    <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                    </div>
                    </div>
                    </div>
                    <div className='modal-footer'>
                        <button onClick={props.onClose} className='button'>Close</button>
                    </div>
                </div>
            </div>
        )

    }
    
}

export default Modal;