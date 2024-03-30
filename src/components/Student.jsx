import React from 'react';

let Student=(props)=>{
    return(
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                <h2>welcome {props.name}</h2>
                <h3>course:{props.course}</h3>
                <pre>{JSON.stringify(props)}</pre>
                </div>
            </div>
        </React.Fragment>    
    );
};
export default Student;
//a component is a function that will return some jsx code 