import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ-Ip05jWprZxgHIGv4NQN2btXsCEABhs",
  authDomain: "social-event-management-24be6.firebaseapp.com",
  projectId: "social-event-management-24be6",
  storageBucket: "social-event-management-24be6.appspot.com",
  messagingSenderId: "56417605254",
  appId: "1:56417605254:web:251724174fa8a9a305e307",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
