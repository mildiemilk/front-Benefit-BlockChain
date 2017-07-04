import React, { Component } from 'react';
import Header from './Header';
class EmptyLayout extends Component {

    render() {
        console.log('NavLayout');
        return (
            <div>
                <Header />
                {this.props.children}   
            </div>
        );
    }
}
export default EmptyLayout;