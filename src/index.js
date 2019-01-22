import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './components/Header';
// import MyInfo from './components/MyInfo';
// import Footer from './components/Footer';
import Card from './components/Cards';
import logo from './logo.svg'
// import TodoItem from './components/TodoItem';

import './index.css';
import './App.css';

const style ={
    display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
}
function MyApp(){
    return(
        <div>
            <div className="total-card">
                <Card contact={{name:"Whisky",imgUrl:"http://placekitten.com/300/200",
                phone:"2323232",
                email:"sadasdsa@asdasd.com"}}
                />

                <Card contact={{name:"Norma",imgUrl:"http://placekitten.com/300/200",
                phone:"454545",
                email:"xccxcx@asdasd.com"}}
                />            

                <Card contact={{name:"Jules",imgUrl:"http://placekitten.com/300/200",
                phone:"676767",
                email:"fdfdfd@asdasd.com"}}
                />

                <Card contact={{name:"Bruno",imgUrl:"http://placekitten.com/300/200",
                phone:"897878",
                email:"xccxcx@asdasd.com"}}
                />
                    
                
                {/* <Header />
                <MyInfo />
                <Footer /> */}
            </div>
            <img style={style} src={logo} className="App-logo"></img>
        </div>
    )
}



ReactDOM.render(<MyApp /> ,document.getElementById("root"));