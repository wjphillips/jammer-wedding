import React from 'react';

class HomeButton extends React.Component {
    render(){
        return <button>{this.props.name}</button>;
    }
};

export default HomeButton;