import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    //Multiple States
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //(or)
    //Single State instead of multiple states not recommended
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput ({ this approach is not used because react will keep state update in schedule so it might not reflect current state as sooon as possible.
        //     ...userInput,
        //     enteredTitle : event.target.value   
        // }) alternative to this is :
        // setUserInput( (previousState) => {
        //     return {
        //         ...previousState,
        //         enteredTitle : event.target.value,
        //     };
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput ({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput ({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
                <div className='new-expense__actions'>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;