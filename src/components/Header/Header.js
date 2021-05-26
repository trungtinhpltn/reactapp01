import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h3 className="display-3" style={{fontSize: '3.5rem'}}>Quản lí người dùng bằng ReactJS</h3>
                </div>
            </div>

        );
    }
}

export default Header;