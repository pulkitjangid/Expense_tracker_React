import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('All');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter((expense)=>{
        if(filteredYear!=="All")
            return expense.date.getFullYear().toString() === filteredYear
        return expense.date.getFullYear().toString()
    })



    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items= {filteredExpenses} />
        </Card>
    )
}

export default Expenses;