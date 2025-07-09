import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button>入力</button>
      <button>リスト</button>
      <button>カレンダー</button>
      <button>設定</button>
    </footer>
  );
};

export default Footer;
