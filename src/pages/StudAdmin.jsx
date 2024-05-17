import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/StudAdmin.css";
import StudHeader from "../components/StudHeader";
// import { loginStudent } from "../services/authService";
import { auth } from "../firebase";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StudAdmin = () => {
  // Access the location state
  const location = useLocation();
  const { email, password } = location.state || {}; //
  const percentage = 66;

  return (
    <>
      {auth && email && password ? (
        <>
          <div id="studAdmin" className="studAdmin">
            <StudHeader />
            <div className="userDetail">
              <h2>DashBoard</h2>
              <h1>🌟🌟Welcome, {email}🌟🌟</h1>
              <p>
                You have successfully logged in to your account. You can now
                submit your thesis and view your grades.
              </p>
            </div>

            <div className="progressReport">
              <div className="box">
                <div>
                  {/* <img src={numberOfSubmissions} alt="numberOfSubmissions" /> */}

                  <h3>10</h3>
                </div>
                <h2>Number of Submissions</h2>
              </div>
              <div className="box">
                <div>
                  {/* <img src={numberOfSubmissions} alt="numberOfSubmissions" /> */}

                  <h3>7</h3>
                </div>
                <h2>Number of validation</h2>
              </div>
              <div className="box">
                <div>
                  {/* <img src={numberOfSubmissions} alt="numberOfSubmissions" /> */}

                  <h3>9</h3>
                </div>
                <h2>Number of Corrections</h2>
              </div>
            </div>

            <div className="progressbar">
              <div>
                <CircularProgressbar
                  // value={progress}
                  maxValue={100}
                  // text={progress + '%'}
                  styles={buildStyles({
                    textSize: "16px",
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: "orange",
                    trailColor: "orange",
                    backgroundColor: "orange",
                  })}
                  value={percentage}
                  text={`${percentage}%`}
                />
                ;
              </div>
              <div>
                <p>
                  You have completed <span>{percentage}%</span> of your thesis
                  submission
                </p>

                <Link to={"/thisisForm"}>Submit Thesis</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1
          style={{
            textAlign: "center",
            marginTop: "20vh",
            color: "red",
          }}
        >
          Unauthorized Access
        </h1>
      )}
    </>
  );
};

export default StudAdmin;
