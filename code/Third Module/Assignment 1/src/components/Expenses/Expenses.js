import React, {useState} from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) =>{
    console.log('Expenses.js file');
    setFilteredYear(selectedYear);
  }
  
  const filteredExpenses = props.expenses.filter(
    expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter defaultYear={filteredYear}  onChangeFilter = {filterChangeHandler}/> 
        {/** This is a controlled component as most of the functionality is done in this*/}
        {filteredExpenses.map((expense) => (
            <ExpenseItem 
              key = {expense.id}  // this is used to structure the array so that 
                                  // element is added to the top, 
                                  // instead of adding the component to the bottom 
                                  // and then changing the values of all the components 
                                  // based on the order in the list
              title = {expense.title}
              amount = {expense.amount}
              date = {expense.date}
            />
        ))
        }

      </Card>
    </div>
  )
}

export default Expenses;