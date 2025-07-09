import React, { useState } from 'react';
import styles from './add.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Add = () => {
  const navigate = useNavigate()
  //メモ入力
  const [description, setDescription] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [repeatType, setRepeatType] = useState('none');
  const [reminder, setReminder] = useState('');


  return (
    <div className={styles.container}>
      <Header />
      <hr className={styles.line} />
      <div className={styles.inputRow}>
        <label className={styles.basicLabel}>▶基本情報</label>
      </div>
      <div className={styles.inputRow}>
        <label>[タイトル]</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onInput={(e) => {
            e.target.style.height = 'auto'; // 高さリセット
            e.target.style.height = `${e.target.scrollHeight}px`; // 中身に合わせて高さを拡張
          }}
          placeholder="タイトルを入力"
          rows={1}
        />
      </div>

      <div className={styles.inputRow}>
        <label>メモ</label>
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
      <div className={styles.inputRow2}>
        <label className={styles.basicLabel}>▶スケジュール設定</label>
      </div>
      <div className={styles.inputRow}>
        <label>締切日</label>
        <input
          type="date"
          value={deadlineDate}
          onChange={(e) => setDeadlineDate(e.target.value)}
        />
      </div>
      <div className={styles.inputRow}>
        <label>繰り返し</label>
        <select
          value={repeatType}
          onChange={(e) => setRepeatType(e.target.value)}
        >
          <option value="none">なし</option>
          <option value="daily">毎日</option>
          <option value="weekly">毎週</option>
          <option value="monthly">毎月</option>
        </select>
      </div>
      <div className={styles.inputRow}>
        <label>リマインダー</label>
        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Add;
