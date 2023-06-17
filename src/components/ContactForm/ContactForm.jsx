import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export class ContactForm extends Component{
    state = {
        name: '',
        number: '',
      };

      handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        let contactForAdd = { name: this.state.name, number: this.state.number };
        this.props.onSubmitData(contactForAdd);
        this.reset();
      };
    
      reset = () => {
        this.setState({ name: '', number: '' });
      };
     


    render(){
        return(
            <div className={style.containerPhonebook}>
                <form className={style.containerForm}>
                    <div>
                        <label className={style.label}>Name</label>
                        <br />
                        <input className={style.input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            placeholder="Example Hamilton smith"
                            required
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                    <div>
                        
                        <label className={style.label}>Number</label>
                        <br />
                        <input className={style.input}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            placeholder="Example 450-53-92"
                            required
                            onChange={this.handleChange}
                            value={this.state.number}
                        />
                    </div>
                        
                        <div>
                            <button className={style.button} type="submit" onClick={this.handleSubmit} >Add Contact</button>
                        </div>    
                    
                </form>
            </div>
        )
    }
}

ContactForm.propTypes = {
    onSubmitData: PropTypes.func.isRequired,
  };

export default ContactForm;