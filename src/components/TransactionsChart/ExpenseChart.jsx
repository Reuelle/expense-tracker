import React, { useEffect, useState, useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2'; // Using Chart.js for rendering the chart
import styles from './ExpenseChart.module.css';

const ExpenseChart = ({ transactions }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);

  const categories = useMemo(() => {
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
    return Object.entries(categoryMap).map(([name, amount]) => ({ name, amount }));
  }, [transactions]);

  const data = useMemo(() => ({
    labels: categories.map(category => category.name),
    datasets: [{
      data: categories.map(category => category.amount),
      backgroundColor: categories.map((_, index) => `hsl(${index * 50}, 70%, 50%)`),
    }],
  }), [categories]);

  const options = {
    cutout: '70%',
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const percentage = ((tooltipItem.raw / totalExpenses) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          }
        }
      }
    }
  };

  return (
    <div className={styles.expenseChartContainer}>
      <h2>Total Expenses This Month</h2>
      {transactions.length > 0 ? (
        <>
          <Doughnut data={data} options={options} />
          <ul className={styles.categoryList}>
            {categories.map((category, index) => (
              <li key={category.name} className={styles.categoryItem}>
                <span 
                  className={styles.marker} 
                  style={{ backgroundColor: `hsl(${index * 50}, 70%, 50%)` }}
                ></span>
                <span>
                  {category.name}: {((category.amount / totalExpenses) * 100).toFixed(2)}%
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No transactions available for this month.</p>
      )}
    </div>
  );
};

export default ExpenseChart;
