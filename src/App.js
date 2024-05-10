
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import StudentLogin from "./pages/StudLogin";
// import StudentSignUp from "./pages/StudSignUp";
// import StudentAdmin from './pages/StudAdmin';
// import FacultySignup from './pages/FacultySignup';
// import FacultyLogin from './pages/FacultyLogin';
// import FacultyAdmin from './pages/FacultyAdmin';

// // Import Firebase
// import { getFirestore } from 'firebase/firestore';
// import { app } from './firebase'; // Import 'app' using destructuring

// // Initialize Firestore
// const db = getFirestore(app);

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/student-login" element={<StudentLogin />} />
//           <Route path="/faculty-login" element={<FacultyLogin />} />
//           <Route path="/student-signup" element={<StudentSignUp db={db} />} />
//           <Route path="/faculty-signup" element={<FacultySignup db={db} />} />
//           <Route path="/student-admin" element={<StudentAdmin db={db} />} />
//           <Route path="/faculty-admin" element={<FacultyAdmin db={db} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentLogin from './pages/StudLogin';
import StudentSignUp from './pages/StudSignUp';
import StudentAdmin from './pages/StudAdmin';
import FacultySignup from './pages/FacultySignup';
import FacultyLogin from './pages/FacultyLogin';
import FacultyAdmin from './pages/FacultyAdmin';
import Image from './components/Image';

// Import Firebase
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase'; // Import 'app' using destructuring

// Initialize Firestore
const db = getFirestore(app);

// Error Handling Component (Optional)
// import ErrorBoundary from './components/ErrorBoundary'; // Assuming you have an ErrorBoundary component

const App = () => {
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
            <Route path="/student-admin" element={<StudentAdmin db={db} />} />
            <Route path="/faculty-admin" element={<FacultyAdmin db={db} />} />
          </Routes>
          <div>
              <Image src="data:image/jpeg;base64,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" alt="Example Image" />
            </div>
        </div>
      {/* </ErrorBoundary> */}
    </Router>
  );
};

export default App;
