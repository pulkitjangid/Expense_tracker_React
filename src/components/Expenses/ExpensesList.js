import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';


function ExpensesList(props) {
    let expensesContent = <p>No expenses found!</p>
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expense-list">
            { props.items.map((expense) =>(
            <ExpenseItem title={expense.title} date={expense.date} key= {expense.id} amount={expense.amount}/>
            ))}   
        </ul>
    )
}

export default ExpensesList