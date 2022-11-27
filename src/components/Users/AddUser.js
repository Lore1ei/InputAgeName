import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, serError] = useState();

    const addUsername = event => {
        event.preventDefault();
        if(+enteredAge < 1){
            serError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            })
            return
            if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
                serError({
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non empty values)'
                })
                return
            }
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    
    const errorHandler = () => {
      serError(null);
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler}/>}
            <Card className={styles.input}>
            <form onSubmit={addUsername}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
                <label htmlFor="">Age (Years)</label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
            </Card>
        </div>
    )
}

export default AddUser;