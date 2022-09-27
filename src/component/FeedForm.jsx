import React from "react";
import DetailsList from "./DetailsList";
import './Styling.css'

class FeedForm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name : '',
            dept : '',
            rate : '',
            users:[]
        }
        
    }
    
    
    handleNameChange = (event) => {
        this.setState({name:event.target.value})
    }
    handleDeptChange = (event) => {
        this.setState({dept:event.target.value})
    }
    handleRateChange = (event) => {
        this.setState({rate:event.target.value})
    }
           
    

    // const data = this.state;
    handleSubmit = (event) => {
    const updateUsers = this.state.users;
    updateUsers.push({name:this.state.name , dept:this.state.dept , rate:this.state.rate})
    this.setState({users:updateUsers , name:'', dept:'' , rate:''})
        
    event.preventDefault();
    }


    render(){
        return(
            <div className="container">
                <h1 className="feedHeading">EMPLOYEE FEEDBACK FORM</h1>
                <form>
                    <div className="formElem">
                        <label htmlFor="name">Name : </label>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <div className="formElem">
                        <label htmlFor="dept">Department : </label>
                        <input type="text" value={this.state.dept} onChange={this.handleDeptChange}/>
                    </div>
                    <div className="formElem">
                        <label htmlFor="rate">Rating : </label>
                        <input type="number" value={this.state.rate} onChange={this.handleRateChange}/>
                    </div>
                    
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                <div className="detailsContainer">
                    <DetailsList name={this.state.name} dept={this.state.dept} rate={this.state.rate} users={this.state.users}/>
                </div>
            </div>
        )
    }

}

export default FeedForm;