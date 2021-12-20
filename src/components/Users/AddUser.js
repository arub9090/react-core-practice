import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser=props=>{

    const [enteredUserName, setEnteredUserName]=useState('');
    const [enteredAge, setEnteredAge]=useState('');
    const [error, setError]= useState();

    const addUserHandeler=(event)=>{
        event.preventDefault();

        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:"Error In Username and Age",
                message:"Please Provide valid Name and Age Which is Non-Empty"
            })
            return;
        }

        if(+enteredAge < 1){
            setError({
                title:"Error Age Value",
                message:"Please Provide Age > 1"
            })

            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    }


    const userNameChangeHandeler=(event)=>{
        setEnteredUserName(event.target.value);

    }
    const ageChangeHandeler=(event)=>{
        setEnteredAge(event.target.value);

    }

    const errorHandler=()=>{
        setError(null);
    }

    return(
       <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandeler}>
            <label htmlFor='username'>User Name</label>
            <input type='text' id='username' value={enteredUserName} onChange={userNameChangeHandeler}></input>
            <label htmlFor='age'>Age (in Years)</label>
            <input type='number' id='age' value={enteredAge} onChange={ageChangeHandeler}></input>
            <Button type='submit'> Add User </Button>
        </form>
        </Card>
       </div>
    )

}

export default AddUser;