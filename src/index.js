import React from "react";
import ReactDOM from "react-dom";
import stylesheet from "./styles.css";
import App from "./App";
import Card from "./Card";
import Contacts from "./Contacts";
ReactDOM.render(
  <div>
    <h1 className="Heading">My Contacts</h1>
    {Contacts.map((contact) => (
      <Card
        key={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        email={contact.email}
        phn={contact.phn}
      />
    ))}
  </div>,
  document.getElementById("root")
);
