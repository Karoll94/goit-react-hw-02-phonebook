import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './ContactList.module.css';


export class ContactList extends Component {
    deleteId = Id => {
      this.props.del(Id);
    };
    render() {
      const { contacts } = this.props;
      return (
        <div className={style.containerList}>
          <ul>
            {contacts?.map((contact) => {
              return (
                <div className={style.list} key={contact.id}>
                  <li>{contact.name}: {contact.number}</li>
                  <button className={style.button}
                  data-id={contact.id}
                  onClick={() => this.deleteId(contact.id)}
                  >Delete</button>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  

export default ContactList;


ContactList.propTypes = {
    contacts: PropTypes.array,
    del: PropTypes.func,
  };