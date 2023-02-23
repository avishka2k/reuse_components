import { useEffect, useState } from "react";
import "./profile.css";
import { useAuthValue } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import ListItem from "../ListItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Profile() {
  const { currentUser } = useAuthValue();
  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: currentUser,
      }));
      setTodos(newData);
      console.log(todos);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="center">
      <div className="profile">
       
        <h1>Profile</h1>
        <p>
          {todos.displayName}
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
      <ListItem />
    </div>
  );
}

export default Profile;
