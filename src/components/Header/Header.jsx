import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <p>📝新しいタスクを追加</p>
    </header>
  );
};

export default Header;
