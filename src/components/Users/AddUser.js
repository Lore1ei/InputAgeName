import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import {useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const nameInput = useRef();
    const ageInput = useRef();

    const [error, serError] = useState();

    const addUsername = event => {
        event.preventDefault();
        const enteredUsername = nameInput.current.value;
        const enteredAge = ageInput.current.value;
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
            serError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non empty values)'
            })
            return
        }
        if(+enteredAge < 1){
            serError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge);
        nameInput.current.value = '';
        ageInput.current.value = '';
    }

    
    const errorHandler = () => {
      serError(null);
    }

    return(
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onErrorHandler={errorHandler}/>}
            <Card className={styles.input}>
            <form onSubmit={addUsername}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    ref={nameInput}
                />
                <label htmlFor="">Age (Years)</label>
                <input
                    type="number" id="age"
                    ref={ageInput}
                />
                <Button type="submit">Add User</Button>
            </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;