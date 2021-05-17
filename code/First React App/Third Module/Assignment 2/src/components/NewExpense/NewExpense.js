import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setISEditing(false);
    }
    const [isEditing, setISEditing] = useState(false)

    const startEditingHandler = () => { 
      setISEditing(true);
    } 
    const stopEditingHandler = () => {
      setISEditing(false);
    }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm  onSaveExpenseData ={saveExpenseDateHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;