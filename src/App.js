import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
 
const customers = [{ 
  'id'    : 1,
  'image' : 'https//placeing.com/64/64/any',
  'name' : '김가군',
  'birthday' : '731225',
  'gender' : '남자',
  'job' : '학생'
},
{ 
  'id'    : 2,
  'image' : 'https//placeing.com/64/64/any',
  'name' : '김다비',
  'birthday' : '731224',
  'gender' : '여자',
  'job' : '학생'
},
{ 
  'id'    : 3,
  'image' : 'https//placeing.com/64/64/any',
  'name' : '김나군',
  'birthday' : '7312254',
  'gender' : '남자',
  'job' : '학생'
}

]

class App extends  Component{
  render(){
      return ( 
         <div>
          {
            customers.map( c => {
              return(
                <Customer
                  key={c.id}
                  id={c.id} 
                  image={c.image}
                  name={c.name}
                  gender={c.gender}
                  job={c.job}
                  birthday={c.birthday}
                />
              )
           })
          } 
         </div>
      );
  }
}

export default App;
