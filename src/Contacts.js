import React from "react";
import './Contacts.css';

/*function Contact(props) {
  return <div>This is a contact</div>;
}*/

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Today's Kitty</h1>
      </center>
      {contacts.map((contacts) => (
          <center>
            <div id = "kitty-img">
              <img src = {contacts.url}/>
            </div>              
          </center>
      ))}
      <button onClick={() => window.location.reload(false)}>Click to reload!</button>      
    </div>
  )
};

export default Contacts;