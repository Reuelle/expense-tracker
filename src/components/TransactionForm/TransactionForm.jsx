// src/components/TransactionForm/TransactionForm.jsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import Notiflix from 'notiflix';
import styles from './TransactionForm.module.css';
import CategoriesModal from '../CategoriesModal/CategoriesModal'; // Import your CategoriesModal

const TransactionForm = ({ onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(false);
  };

  const validationSchema = Yup.object({
    transactionType: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    time: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    sum: Yup.number().positive('Must be positive').required('Required'),
    comment: Yup.string().max(200, 'Comment too long'),
  });

  const initialValues = {
    transactionType: 'expense',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0],
    category: '',
    sum: '',
    comment: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values)
      .then(() => {
        resetForm();
        //Notiflix.Notify.success('Transaction added successfully!');
      })
      .catch(() => {
        //Notiflix.Notify.failure('Failed to add transaction.');
      });
  };

  return (
    <div className={styles.transactionFormContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.transactionForm}>
            <div className={styles.formGroup}>
              <label>Transaction Type</label>
              <div>
                <label>
                  <Field type="radio" name="transactionType" value="expense" />
                  Expense
                </label>
                <label>
                  <Field type="radio" name="transactionType" value="income" />
                  Income
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="date">Date</label>
              <Field
                id="date"
                name="date"
                type="date"
                className={styles.datePicker}
              />
              <ErrorMessage name="date" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="time">Time</label>
              <Field
                id="time"
                name="time"
                type="time"
                className={styles.timePicker}
              />
              <ErrorMessage name="time" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <div className={styles.categoryField} onClick={() => setIsModalOpen(true)}>
                <Field
                  id="category"
                  name="category"
                  type="text"
                  value={selectedCategory}
                  readOnly
                />
              </div>
              <ErrorMessage name="category" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="sum">Sum</label>
              <Field
                id="sum"
                name="sum"
                type="number"
                className={styles.sumField}
              />
              <ErrorMessage name="sum" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="comment">Comment</label>
              <Field
                id="comment"
                name="comment"
                as="textarea"
                className={styles.commentField}
              />
              <ErrorMessage name="comment" component="div" className={styles.errorMessage} />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {isModalOpen && (
        <CategoriesModal onSelect={handleCategorySelect} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default TransactionForm;
