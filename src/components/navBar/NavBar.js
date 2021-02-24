import React from 'react';
import { NavItem } from './NavItem';
import './NavBar.css';


export default class NavBar extends React.Component {
    render() {
        var menu = [{
            "name": "Home",
            "code": "1"
        }, {
            "name": "Login",
            "code": "2"
        }];
        return (
            <div className="row">
                <nav class="navbar navbar-inverse" role="navigation">
                    <div className="navbar-header">
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            {menu.map(function (currentValue, index, array) {
                                return <NavItem
                                    key={currentValue.code}
                                    name={currentValue.name}
                                    isFirstOne={index == 0 ? true : false} />;
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}