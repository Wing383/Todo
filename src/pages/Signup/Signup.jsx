import React, { useState } from 'react';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate()

  const handleLogin = () => {
    // ここにログイン認証の処理を入れたりできる
    // 例: API通信 → 成功したらnavigate

    navigate('/');
  };
  const handleAdd = () => {
  // ここにログイン認証の処理を入れたりできる
  // 例: API通信 → 成功したらnavigate
  navigate('/Add');
};
  return (
    <div>
      <form className={styles.container}>
        <p>サインアップ</p>
        <label className={styles.user_label} htmlFor="username">ユーザーネーム</label>
        <input
          id="username"
          type="text"
          placeholder="ユーザーネーム"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
          <button onClick={handleAdd}>確定</button>
        </div>
        <div className={styles.sig_button}>
          <button onClick={handleLogin}>ログイン画面に戻る</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
