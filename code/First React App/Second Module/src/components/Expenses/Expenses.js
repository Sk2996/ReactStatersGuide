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

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter defaultYear={filteredYear}  onChangeFilter = {filterChangeHandler}/> {/** This is a controlled component as most of the functionality is done in this*/}
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />

      </Card>
    </div>
  )
}

export default Expenses;