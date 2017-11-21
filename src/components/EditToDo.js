import React, { Component } from 'react';
import moment from "moment";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
class EditToDo extends Component {
  constructor(){
    super();
    this.state = {
      selectedDay: undefined,
      
     
    };
  
   
   
    }
    handleDayChange = selectedDay => {
      this.setState({ selectedDay });  
  var date = moment(selectedDay).toISOString();
  var mydate = new Date();
   mydate = date;
 this.setState({selectedDay: null});
 this.props.selectedHero.date = mydate;
 console.log(mydate);
 
 
 
    };

  render(){
   
    const value = this.state.selectedDay
    ? this.state.selectedDay.format("DD/MM/YYYY")
    : "";

    if (this.props.selectedHero) {
      return (
        <div>
       
          <div className="editfields">          
            <div>
              <label>name: </label>
              <input
                name="name"
                value={this.props.selectedHero.name}
                placeholder="name"
                onChange={this.props.onChange}
              />
            </div>
         
            <div>    
            <label>Date: </label>    
            <DayPickerInput
              name="date"
              placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY"
              value={moment(this.props.selectedHero.date).format("DD/MM/YYYY")}
              onDayChange={this.handleDayChange}
              
            />
          </div>
          <div>

          </div>
          </div>
          <button onClick={this.props.onCancel}>Cancel</button>
          <button onClick={this.props.onSave}>Save</button>
        </div>
      );
    } else {
      return <div />;
    }
  }
 
};

export default EditToDo;
