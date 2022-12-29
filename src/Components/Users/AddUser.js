import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
//import UserList from "./UserList";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, updatedUsername] = useState("");
  const [enteredAge, updatedAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      +enteredAge < 1 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    props.onAdduser(enteredUsername, enteredAge);

    updatedUsername("");
    updatedAge("");
  };

  const usernameChangeHandler = (event) => {
    updatedUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    updatedAge(event.target.value);
  };

  const errorHandler=()=>{
    console.log("done");
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (in Years)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeChangeHandler}
            value={enteredAge}
          />
          <Button type="submit"> Add New User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
