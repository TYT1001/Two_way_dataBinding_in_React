import React,{useState} from 'react';
import './NewGoal.css';

const NewGoal = (props) => {

    let [enterText,setEnterText] = useState('');
    
    const addGoalHandler = event => {
        event.preventDefault();

        setEnterText('')
        
        const newGoal = {
            id : Math.random().toString(),
            text : enterText
        };

    
        props.onAddGoal(newGoal);
    }

    const textChangeHandler = event => {
        setEnterText(event.target.value);
    }
    
    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type='text' value={enterText} onChange={textChangeHandler}></input>
            <button type='submit'>Add Goal</button>
        </form>
    );
}

export default NewGoal;