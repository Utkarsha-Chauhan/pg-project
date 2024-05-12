


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentLogin from './pages/StudLogin';
import StudentSignUp from './pages/StudSignUp';
import StudentAdmin from './pages/StudAdmin';
import FacultySignup from './pages/FacultySignup';
import FacultyLogin from './pages/FacultyLogin';
import FacultyAdmin from './pages/FacultyAdmin';

// Import Firebase
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase'; // Import 'app' using destructuring
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize Firestore
const db = getFirestore(app);

// Error Handling Component (Optional)
// import ErrorBoundary from './components/ErrorBoundary'; // Assuming you have an ErrorBoundary component

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      {/* Wrap routes with ErrorBoundary for error handling (optional) */}
      {/* <ErrorBoundary> */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/faculty-login" element={<FacultyLogin />} />
            <Route path="/student-signup" element={<StudentSignUp db={db} />} />
            <Route path="/faculty-signup" element={<FacultySignup db={db} />} />

            {/* Protected Routes (implement logic to check authentication and roles) */}
            {/* <Route path="/student-admin" element={<StudentAdmin db={db} />} />
            <Route path="/faculty-admin" element={<FacultyAdmin db={db} />} /> */}
            {
              // Add protected routes here
              user 
              ? (
                <>
                  <Route path="/student-admin" element={<StudentAdmin db={db} />} />
                  <Route path="/faculty-admin" element={<FacultyAdmin db={db} />} />
                </>
              )
              : (
                <Route path="*" element={<div
                  style={{
                    padding: '20px',
                    width :"100%",
                    height:"100vh",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'

                  }}
                >
                  <h1 
                    style={{
                      color: 'red',
                      textAlign: 'center'
                    }}
                  >Protected Routes</h1>
                  <p
                    style={{
                      textAlign: 'center'
                    }}
                  >You need to be logged in to access these routes</p>
                </div>
                } />
              )
            }
          </Routes>
        
        </div>
      {/* </ErrorBoundary> */}
    </Router>
  );
};

export default App;
