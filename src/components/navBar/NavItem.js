import React from "react";

export class NavItem extends React.Component{
  render(){
    return(
      <li className={this.props.isFirstOne == true ? "active": ""}><a>{this.props.name}</a></li>
    );
  }
}
export default NavItem;
