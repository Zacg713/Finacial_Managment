 
// ExpenseList.js
 
import React from 'react';
 
function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses && expenses.map((expense, index) => ( // Check if expenses is defined before mapping
          <li key={index}>
            {expense.name} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default ExpenseList;