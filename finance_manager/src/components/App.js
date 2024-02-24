 
// App.js
 
import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ChartComponent from './ChartComponent';
 
function App() {
  const [expenses, setExpenses] = useState([]);
 
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
 
  return (
    <div className="App">
      <h1>Personal Finance Manager</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <ChartComponent expenses={expenses} />
    </div>
  );
}
 
export default App;
