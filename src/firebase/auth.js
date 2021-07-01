import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDUuWRH4wd9p5ewIFcfk1AMr_PZ9s5kWS0',
  authDomain: 'authentication-test-79623.firebaseapp.com',
  projectId: 'authentication-test-79623',
  storageBucket: 'authentication-test-79623.appspot.com',
  messagingSenderId: '185946092144',
  appId: '1:185946092144:web:2e58a1409a5179f48fbab5',
  measurementId: 'G-Z2FSYLTD8M',
};
firebase.initializeApp(firebaseConfig);

//新規登録時の処理(emailとpasswardで認証)
export const signupWithEmailAndPassword = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // sendEmailVerificationの設定
    // 新規登録時に登録アドレスに認証メールを送信
    // currentUserには、上記で登録されたユーザー情報が入っている(ログイン中のユーザー情報)
    await firebase.auth().currentUser.sendEmailVerification();
    alert('登録成功');

    return user;
  } catch (error) {
    alert('登録失敗');
    console.log(error);
  }
};
//ログイン時の処理(emailとpasswardで認証)
export const signinWithEmailAndPassword = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    alert('サインイン成功');

    return user;
  } catch (error) {
    alert('サインイン失敗');
    console.log(error);
  }
};
//ログアウト時の処理(emailとpasswardで認証)
export const signout = async (email, password) => {
  try {
    const user1 = await firebase.auth().currentUser;
    console.log('サインアウト前 : ', user1);

    await firebase.auth().signOut();

    const user2 = await firebase.auth().currentUser;
    console.log('サインアウト後 : ', user2);

    alert('サインアウト成功');
  } catch (error) {
    alert('サインアウト失敗');
    console.log(error);
  }
};
