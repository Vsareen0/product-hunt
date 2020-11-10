import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  // register
  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return newUser.user.updateProfile({
      displayName: name,
    });
  }

  // login
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // logout
  logout() {
    return this.auth.signOut();
  }

  // reset password
  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
