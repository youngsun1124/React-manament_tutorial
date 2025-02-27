import React from 'react';
import Table from   '@mui/material/Table';     // eslint-disable-line no-unused-vars
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';



class Customer extends React.Component{

    render(){
        return (
       
              <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt='이미지' /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                
            </TableRow> 
             
        )

    }


    
}  

export default Customer;