import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/2017-2018/dcs/dev_35/client_app/" activeStyle={this.active}>
                Book List
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_35/client_app/BookByID" activeStyle={this.active}>
                Book by ID
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_35/client_app/BookBy2Params" activeStyle={this.active}>
                Book by num_of_pages and price
                </NavLink>
            </div>
);}}
export default Header;
