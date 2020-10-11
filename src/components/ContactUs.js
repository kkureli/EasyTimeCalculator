import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contactUs"
      style={{
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
      }}
    >
      <h2 style={{ color: "rgb(246,161,91)" }}>Contact Us</h2>
      <h4 style={{ marginTop: 20 }}>
        Notify us of any problems, ideas, or suggestions.
      </h4>

      <form
        style={{
          //   alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>E-mail</label>
          <input
            style={{
              borderRadius: 30,
              height: 25,
              paddingLeft: 5,
              marginTop: 5,
              backgroundColor: "rgb(254,251,216)",
            }}
            type="email"
            name=""
            id=""
          />
        </div>

        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Subject</label>
          <input
            style={{
              borderRadius: 30,
              height: 25,
              paddingLeft: 5,
              marginTop: 5,
              backgroundColor: "rgb(254,251,216)",
            }}
            type="text"
            name=""
            id=""
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Message</label>
          <textarea
            style={{
              borderRadius: 30,
              height: 105,
              paddingLeft: 25,
              paddingTop: 20,
              marginTop: 5,
              backgroundColor: "rgb(254,251,216)",
              resize: "none",
              borderWidth: 1,
            }}
            type="email"
            name=""
            id=""
          />
        </div>
      </form>
      <div style={{ marginBottom: 20, alignSelf: "center", width: "30vw" }}>
        <button
          style={{
            width: "30vw",
            height: 50,
            backgroundColor: "rgb(234,187,116)",
            borderRadius: 20,
            color: "white",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
