import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className={styles.navigation}>
                <Link className={styles.navlink} to="/home">Home</Link><br />
                <Link className={styles.navlink} to="/login">Login</Link><br />
                <Link className={styles.navlink} to="/register">Register</Link><br />
            </nav>
        </div>
    );
}

export default Navigation;