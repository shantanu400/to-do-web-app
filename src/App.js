import "./App.css";
import Header from "./Mycomp/Header";
import Todos from "./Mycomp/Todos";
import Footer from "./Mycomp/Footer";
import React, { useState, useEffect } from "react";
import Addtodo from "./Mycomp/Addtodo";
import { BrowserRouter, Routes, Route, useAsyncError } from "react-router-dom";
import Login from "./Mycomp/Login";
import Update from "./Mycomp/Update";
import SignUp from "./Mycomp/SignUp";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import PrivateRoute from "./Mycomp/PrivateRoute"; // some functionality is not visible to any person not signed in but he can access that through URL so to avoid that

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  


  const login = (Username, Password) => {
    console.log(Username);
    console.log(Password);
  };

  const signup = (Username, Password) => {
    console.log(Username);
    console.log(Password);
  };

  const onDelete = (todo) => {
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // localStorage.getItem("todos");
  };

  const onUpdate = (sno, title, desc) => {
    console.log("in onUpdate");
    let newTodos = todos.map((todo) => {
      if (todo.sno === sno) {
        todo.title = title;
        todo.desc = desc;
        return todo;
      } else return todo;
    });
    console.log(sno, title, desc);
    settodos(newTodos);
  };

  const addtodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
      isCompleted: 0,
    };

    settodos([...todos, mytodo]);
  };

  const search = (Reqsearch) => {
    setReqsearch(Reqsearch);
  };

  const [todos, settodos] = useState(initTodo);
  
  const [Reqsearch, setReqsearch] = useState("");
  const [SnoToUpdate, setSnoToUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUserloggedin, setIsuserloggedin] = useState(false);
  const [Username, setUsername] = useState("");
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsuserloggedin(true);
        setUsername(user.displayName);
      } else {
        setIsuserloggedin(false);
        setUsername("");
      }
      setLoading(false); // Set loading to false after checking auth state
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner or placeholder content
  }

  const signOutUser = () => {
    signOut(auth).then(() => {
      alert("Sign Out Succesful");
      setIsuserloggedin(false);
      setUsername("Default");
    });
  };

  const setCompleted=(sno)=>{
    console.log("in setcompleted", sno)
    let newTodos = todos.map((todo) => {
      if (todo.sno === sno) {
        console.log("barabar h")
        todo.isCompleted = 1;
        return todo;
      } else return todo;
    });
    
    settodos(newTodos);
    
  }

  return (
    <>
      <BrowserRouter>
        <Header
          title="To-Do Web App"
          search={search}
          isUserloggedin={isUserloggedin}
          Username={Username}
          signOutUser={signOutUser}
        />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute isUserLoggedIn={isUserloggedin}>
                <Todos
                  todos={todos}
                  
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                  Reqsearch={Reqsearch}
                 setCompleted={setCompleted}

                />
              </PrivateRoute>
            }
          />
           <Route path="/login" element={<Login login={login} />} />
          <Route path="/SignUp" element={<SignUp signup={signup} />} />
          <Route
            path="/addtodo"
            element={
              <PrivateRoute isUserLoggedIn={isUserloggedin}>
                <Addtodo addtodo={addtodo} />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
