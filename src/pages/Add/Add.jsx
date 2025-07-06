import React, { useState } from 'react';
import styles from './add.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Add = () => {
  const navigate = useNavigate()
  //メモ入力
  const [description, setDescription] = useState('');

  return (
    <div className={styles.container}>
      <Header />
      <hr className={styles.line} />
      <div className={styles.inputRow}>
        <label>🧾 メモ</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onInput={(e) => {
            e.target.style.height = 'auto'; // 高さリセット
            e.target.style.height = `${e.target.scrollHeight}px`; // 中身に合わせて高さを拡張
          }}
          placeholder="説明を入力"
          rows={1}
        />
      </div>
    </div>
  );
};

export default Add;
