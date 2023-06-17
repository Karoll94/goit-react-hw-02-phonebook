import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './Filter.module.css';


export class Filter extends Component {

    setFilterValue = event => {
        let value = event.currentTarget.value.toUpperCase();
        this.props.setFilterToState(value);
      };
      
      render() {
        return (
          <div className={style.containerFilter}>
            <label className={style.label}>Find contacts by name</label>
            <br/>
            <input className={style.input}
            onChange={this.setFilterValue}></input>
          </div>
        );
      }
    }
    
    export default Filter;
    
    Filter.propTypes = {
      setFilterToState: PropTypes.func.isRequired,
    };