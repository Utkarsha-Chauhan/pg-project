import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Function to sign up a new student
export const signUpStudent = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Store student data to Firestore
    await addStudentDataToFirestore(user.uid, name, email);
    return user;
  } catch (error) {
    throw error;
  }
};

// Function to sign up a new faculty
export const signUpFaculty = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Store faculty data to Firestore
    await addFacultyDataToFirestore(user.uid, name, email);
    return user;
  } catch (error) {
    throw error;
  }
};

// Function to log in a student
export const loginStudent = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Function to log in a faculty
export const loginFaculty = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Function to fetch student data from Firestore
export const fetchStudentData = async (userId) => {
  try {
    const studentDoc = await getDoc(doc(db, "students", userId));
    if (studentDoc.exists()) {
      return studentDoc.data();
    } else {
      throw new Error("Student data not found in Firestore");
    }
  } catch (error) {
    throw error;
  }
};

// Function to fetch faculty data from Firestore
export const fetchFacultyData = async (userId) => {
  try {
    const facultyDoc = await getDoc(doc(db, "faculties", userId));
    if (facultyDoc.exists()) {
      return facultyDoc.data();
    } else {
      throw new Error("Faculty data not found in Firestore");
    }
  } catch (error) {
    throw error;
  }
};

// Function to store student data to Firestore
const addStudentDataToFirestore = async (userId, name, email) => {
  try {
    await setDoc(doc(db, "students", userId), {
      name: name,
      email: email,
    });
  } catch (error) {
    throw error;
  }
};

// Function to store faculty data to Firestore
const addFacultyDataToFirestore = async (userId, name, email) => {
  try {
    await setDoc(doc(db, "faculties", userId), {
      name: name,
      email: email,
    });
  } catch (error) {
    throw error;
  }
};
