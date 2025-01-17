import React from 'react';

class Customer extends React.Component{

    render(){
        return (
            <div>
            <CustomerProfile id={this.props.id} name={this.props.name}  image={this.props.image} />
            <CustomerInfo  birthday={this.props.birthday}   job={this.props.job}  gender={this.props.gender} />
            </div>
        )
    }
}  


class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
            <img src={this.props.image}  alt = 'profile'/>
            <p>{this.props.name} {this.props.id}</p>
            </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.job}</p>
            <p>{this.props.gender}</p>
            
            </div>
        )
    }
}

export default Customer;