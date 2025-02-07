import React, { Component } from 'react';
import './App.css';                               
import Customer from './components/Customer';

import Table from   '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'; 
import Paper from  '@mui/material/Paper';  
import { withStyles } from '@mui/material/styles';     // eslint-disable-line no-unused-vars

const styles = theme => ({                    
    root: {
      width: '100%',
      marginTop : theme.spacing.unit * 3,
      overflowX: "auto"

    },
    table:{
      minWidth:1080      
    }
})
 

const customers = [{ 
  'id'    : 1,
  'image' : 'http://localhost:3000/img/CI_.jpg',
  'name' : '김가군',
  'birthday' : '731225',
  'gender' : '남자',
  'job' : '학생'
},
{ 
  'id'    : 2,
  'image' : 'http://localhost:3000/img/CI_.jpg',
  'name' : '김다비',
  'birthday' : '731224',
  'gender' : '여자',
  'job' : '학생'
},
{ 
  'id'    : 3,
  'image' : 'http://localhost:3000/img/CI_.jpg',
  'name' : '김나군',
  'birthday' : '7312254',
  'gender' : '남자',
  'job' : '학생'
} 
]

class App extends  Component{
  render(){
         const {classes} = this.props;   // eslint-disable-line no-unused-vars
      return ( 
         <Paper  className='{classes.root}'>
           <Table className='{classes.table}'>
              <TableHead>
                  <TableRow >
                        <TableCell>사번</TableCell>
                        <TableCell>사진</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>생일</TableCell>
                        <TableCell>성별</TableCell>
                        <TableCell>직업</TableCell>
                    </TableRow>
              </TableHead>
              <TableBody>
               { customers.map( c => {
                      return  ( 
                    < Customer key={c.id} id={c.id} image={c.image}   name={c.name}    gender={c.gender}  job={c.job} birthday={c.birthday} />  
                  )  
                }  )
               } 
               </TableBody>
           </Table >
          </Paper>
      );
  }
}



export default withStyles(styles)(App);
