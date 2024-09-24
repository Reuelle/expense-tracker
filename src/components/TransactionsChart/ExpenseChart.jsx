// src/components/ExpenseChart/ExpenseChart.jsx
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2'; // Using Chart.js for rendering the chart
import styles from './ExpenseChart.module.css';

const ExpenseChart = ({ transactions }) => {
  const [categories, setCategories] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const categoryMap = {};
    let total = 0;

    transactions.forEach(({ category, amount }) => {
      total += amount;
      if (!categoryMap[category]) {
        categoryMap[category] = 0;
      }
      categoryMap[category] += amount;
    });

    setTotalExpenses(total);
    setCategories(Object.entries(categoryMap).map(([name, amount]) => ({ name, amount })));
  }, [transactions]);

  const data = {
    labels: categories.map(category => category.name),
    datasets: [{
      data: categories.map(category => category.amount),
      backgroundColor: categories.map((_, index) => `hsl(${index * 50}, 70%, 50%)`),
    }],
  };

  return (
    <div className={styles.expenseChartContainer}>
      <h2>Total Expenses This Month</h2>
      <Doughnut data={data} options={{ cutout: '70%' }} />
      <ul className={styles.categoryList}>
        {categories.map(category => (
          <li key={category.name} className={styles.categoryItem}>
            <span className={styles.marker} style={{ backgroundColor: `hsl(${categories.indexOf(category) * 50}, 70%, 50%)` }}></span>
            <span>{category.name}: {((category.amount / totalExpenses) * 100).toFixed(2)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseChart;
