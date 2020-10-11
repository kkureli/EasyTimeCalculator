import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
      className="App"
    >
      <div
        className="navbar"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={require("./logoTimeCal.png")}
            width="80px"
            height="80px"
            alt=""
          />
          <h2 style={{ color: "rgb(246,161,91)", marginLeft: 20 }}>
            Easy Time Calculator
          </h2>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="#features"
          >
            <h3
              style={{
                marginRight: 30,
              }}
            >
              Features
            </h3>
          </a>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="#contactUs"
          >
            <h3>Contact</h3>
          </a>
        </div>
      </div>

      <div
        className="center"
        id="features"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "space-around",
          //   flexDirection: "column",
          // }}
          style={{
            marginLeft: 30,
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <h3 style={{ color: "rgb(246,161,91)" }}>
              Cumulative Time Summation
            </h3>
            <p style={{ width: 250, fontWeight: "bold", marginTop: 20 }}>
              You can easily sum your hours and minutes cumulatively
            </p>
          </div>
          <div>
            <h3 style={{ color: "rgb(246,161,91)" }}>Save Summations</h3>
            <p style={{ width: 250, fontWeight: "bold", marginTop: 20 }}>
              Save your summations and check them whenever you want!
            </p>
          </div>
        </div>

        <div
          style={{
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <img src={require("./app.gif")} width="320px" height="600px"></img>
        </div>

        <div
          style={{
            marginRight: 30,
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <h3 style={{ color: "rgb(246,161,91)" }}>
              Update Saved Summations
            </h3>
            <p style={{ width: 250, fontWeight: "bold", marginTop: 20 }}>
              Update your summations if you did any mistake!
            </p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "rgb(246,161,91)" }}>Download</h3>
            <img
              style={{ marginTop: 20, alignSelf: "center" }}
              src={require("./5a902db97f96951c82922874.png")}
              width="100%"
              height="100"
            ></img>
          </div>
        </div>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
