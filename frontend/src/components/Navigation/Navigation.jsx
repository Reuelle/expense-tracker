import styles from './Navigation.module.css';
import { useAuth } from '../hooks';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

// Import your custom Expense Tracker icon
import ExpenseTrackerIcon from '../assets/icons/expense-tracker-icon.svg'; // Update the path to your icon

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Menu right>
      <Link to="/" className={styles.link}>
        <img src={ExpenseTrackerIcon} alt="Home" className={styles.icon} /> Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" className={styles.link}>
          <img src={ExpenseTrackerIcon} alt="Phonebook" className={styles.icon} /> Phonebook
        </Link>
      )}
    </Menu>
  );
};

export default Navigation;
