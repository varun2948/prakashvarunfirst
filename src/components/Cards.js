import React from 'react';

function Cards(props){
    console.log(props.contact.imgUrl)
    return(
        
            <div className="contact-card">
                <img src={props.contact.imgUrl} />
                <h3>Name: {props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
    )
}



export default Cards