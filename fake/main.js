// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcJfBh8fWEJyML8lxnb2iXL6voCUmge78",
  authDomain: "rahul-3bc41.firebaseapp.com",
  databaseURL: "https://rahul-3bc41-default-rtdb.firebaseio.com",
  projectId: "rahul-3bc41",
  storageBucket: "rahul-3bc41.appspot.com",
  messagingSenderId: "512063040315",
  appId: "1:512063040315:web:0d85492d4002ebe05aa51e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const button = document.getElementById("button");
button.addEventListener("click", async (e) => {
  e.preventDefault;
  let user_id = document.getElementById("user_id").value;
  let password = document.getElementById("password").value;
  let mobile = document.getElementById("mobile").value;
  if (user_id != "" && name != "" && mobile != "") {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        user_id: user_id,
        name: name,
        mobile: mobile,
      });
      // localStorage.setItem("id", docRef.id);
      console.log("Document written with ID: ", docRef.id);
      window.location = "p2.html";
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
});
/* let doc_id = localStorage.getItem("id");

            await setDoc(doc(db, "users", doc_id), {
              first: "Tokyo",
              country: "Japan",
            }); */
console.log("id", localStorage.getItem("id"));
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().name}`);
  console.log(`${doc.id} => ${doc.data().mobile}`);
  console.log(`${doc.id} => ${doc.data().user_id}`);
});
