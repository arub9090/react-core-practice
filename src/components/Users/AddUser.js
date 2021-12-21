import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
/* import Wrapper from '../Helpers/Wrapper'; */


const AddUser=props=>{

   const nameInputRef= useRef();
   const ageInputRef= useRef();

    /* const [enteredUserName, setEnteredUserName]=useState('');
    const [enteredAge, setEnteredAge]=useState(''); */
    const [error, setError]= useState();

    const addUserHandeler=(event)=>{
        event.preventDefault();
        const enteredName= nameInputRef.current.value;
        const enteredInputAge= ageInputRef.current.value;

        if( enteredName.trim().length===0 || enteredInputAge.trim().length===0){
            setError({
                title:"Error In Username and Age",
                message:"Please Provide valid Name and Age Which is Non-Empty"
            })
            return;
        }

        if(+enteredInputAge < 1){
            setError({
                title:"Error Age Value",
                message:"Please Provide Age > 1"
            })

            return;
        }
        props.onAddUser(enteredName, enteredInputAge);
       nameInputRef.current.value='';
        ageInputRef.current.value='';

    }


    /* const userNameChangeHandeler=(event)=>{
        setEnteredUserName(event.target.value);

    }
    const ageChangeHandeler=(event)=>{
        setEnteredAge(event.target.value);

    } */

    const errorHandler=()=>{
        setError(null);
    }

    return(
       <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandeler}>
            <label htmlFor='username'>User Name</label>
            <input type='text' id='username' ref={nameInputRef}></input>
            <label htmlFor='age'>Age (in Years)</label>
            <input type='number' id='age' ref={ageInputRef}></input>
            <Button type='submit'> Add User </Button>
        </form>
        </Card>
        </React.Fragment>
    )

}

export default AddUser;