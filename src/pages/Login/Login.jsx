import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleLogin = () => {
  // ここにログイン認証の処理を入れたりできる
  // 例: API通信 → 成功したらnavigate
  navigate('/signup');
};
  const handleAdd = () => {
  // ここにログイン認証の処理を入れたりできる
  // 例: API通信 → 成功したらnavigate
  navigate('/Add');
};
  return (
    <div>
      <form className={styles.container}>
        <p>ログイン</p>
        <label className={styles.mail_label} htmlFor="email">メールアドレス</label>
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
        <div className={styles.log_button}>
          <button onClick={handleAdd}>ログイン</button>
        </div>
        <div className={styles.sig_button}>
          <button onClick={handleLogin}>サインアップ画面へ移動</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
