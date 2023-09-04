import React from "react"
import ReactDOM from "react-dom"
import Contacts from "./Contacts"
import Card from "./Card"
ReactDOM.render(
  <h1 className="Heading"> My Contacts</h1>
  <Avatar/>
  <Card
  name={Contacts[0].name}
  email={Contacts[0].email}
  phn={Contacts[0].phn}
  />
  <Card
  name={Contacts[1].name}
  email={Contacts[1].email}
  phn={Contacts[1].phn}/>
);