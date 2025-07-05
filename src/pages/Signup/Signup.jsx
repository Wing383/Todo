import React, { useState } from 'react';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form className={styles.container}>
        <p>ログイン</p>
        <label htmlFor="email">メールアドレス</label>
        <input
          id='email'
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">パスワード</label>
         <input
          id="password"
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className={styles.lo_button}>
          <button>ログイン</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
