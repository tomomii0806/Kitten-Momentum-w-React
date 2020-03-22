import React from "react";
import './Contacts.css';

/*function Contact(props) {
  return <div>This is a contact</div>;
}*/

const Contacts = ({ contacts }) => {
  return (
    <div>
      
      
      {contacts.map((contacts) => (
          <center>
            <div id = "kitty-img">
              <img src = {contacts.url}/>
            </div>              
          </center>
      ))}
    </div>
  )
};

export default Contacts;