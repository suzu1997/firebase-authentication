import { useState } from 'react';
import './App.css';

import {
  signupWithEmailAndPassword,
  signinWithEmailAndPassword,
  signout
} from './firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (event) => {
    event.preventDefault();
    const user = await signupWithEmailAndPassword(email, password);
    console.log('登録user情報 : ', user);
  };
  const signin = async (event) => {
    event.preventDefault();
    const user = await signinWithEmailAndPassword(email, password);
    console.log('ログインuser情報 : ', user);
  };

  return (
    <div>
      <h1>Auth動作確認</h1>
      <h2>登録用フォーム</h2>
      <form onSubmit={signup}>
        <label htmlFor='email'>email: </label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor='password'>password: </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <button type='submit'>登録</button>
      </form>
      <h2>ログインフォーム</h2>
      <form onSubmit={signin}>
        <label htmlFor='email2'>email: </label>
        <input
          type='email'
          id='email2'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor='password2'>password: </label>
        <input
          type='password'
          id='password2'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <button type='submit'>ログイン</button>
      </form>

      <div>
        <button type='button' onClick={signout}>ログアウト</button>
      </div>
    </div>
  );
}

export default App;
