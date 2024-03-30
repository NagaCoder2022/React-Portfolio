import React, { Component } from 'react';

class WishCard extends Component {

    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="card">
                   <div className="card-body">
                       <h2>welcome {this.props.name}</h2>
                       <h3>age:{this.props.age}yrs</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WishCard;
/*react js props and state
what is prop own atribute will given is called prop from one compom=nent to to your 
component you recieve the data through props component means a piece of ui means user interface ui means it can be a
tag diagram image the data itself can be maintain is called state */ 
