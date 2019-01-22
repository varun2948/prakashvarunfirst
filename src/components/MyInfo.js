import React from 'react';
import logo from '../logo.svg';

function MyInfo(){
    const date= new Date()
    const hour = (date.getMinutes())
    const styles1={
        backgroundColor: "red",
        textAlign: "center",
        color:"green"
    }
    const styles={
        backgroundColor: "gray",
        textAlign: "center",
        color:"green"
    }
    // alert(hour)
    let timeofday
    if(hour>=5){
        timeofday="Good Evening"
        styles.color="green"
    }
    else{
        timeofday="Good Morning"
        styles.color="black"

    }
    const first = "Varun"
    const second = "Pradhan"
    

    return(
        <main>
            <h3 style={styles}> Hello {first} {second} {timeofday}</h3>
            <p style={styles1}> This is a Little About Me on React JS</p>
            <ul>
                <li><input type="checkbox" name="Perfume" /><span>Rose</span></li>
                <li><input type="checkbox" name="Bag" /><span>Perfume</span></li>
                <li><input type="checkbox" name="Flower" /><span>Bag</span></li>
            </ul>
            <img src={logo} className="App-logo"></img>
        </main>
    )
}


export default MyInfo