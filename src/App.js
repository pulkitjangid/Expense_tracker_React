import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


  
const DUMMY_EXPENSES = [
  {
    id : 1,
    title : "First",
    date : new Date('2019-01-01'),
    amount : 233
  },
  {
    id : 2,
    title : "Second",
    date : new Date('2020-03-03'),
    amount : 23
  },
  {
    id : 3,
    title : "Third",
    date : new Date(),
    amount : 56
  }
]



function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenes)=>{
      return [expense, ...prevExpenes]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>      
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
