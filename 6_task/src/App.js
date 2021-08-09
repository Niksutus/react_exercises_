import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import View from "./View/View";
import Popup from "./Popup/Popup";

const App = () => {
const [note, setNote] = useState({
  firstname: "",
  lastname: "",
  phonenumber: "",
  message: "",
  role: "",
});

const[showPopup, setShowPopup] = useState(false);

const changeHandler = (e) => {
  setNote({
    [e.target.name]: e.target.value,
  });
};

const popupHandler = (e) => {
  setShowPopup(true);
  e.preventDefault();
};

const submitHandler = (e) => {
  setShowPopup(true);
  e.preventDefault();
};
   
return (
    <>
      <Form onChange={this.changeHandler} submit={this.submitHandler} />
      <View
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        phonenumber={this.state.phonenumber}
        message={this.state.message}
        role={this.state.role}
      />
      <NotesList />
      {showPopup && (
        <Popup
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role}
          submit={submitHandler}
        />
      )}
  </>
  );
}


export default App;
