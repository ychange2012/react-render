/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
  Navbar,
  Brand
} from 'react-bootstrap';
//var Sidebar = require('react-sidebar').default;
import {default as Sidebar} from  'react-sidebar';
import SidebarCon from './sidebar';

class Main extends Component {
  
	constructor(props, context) {
    super(props, context);
    this.state = {
      currentComponent: null,
      docked: false,
      transitions: true,
      touch: true,
      shadow: true,
      touchHandleWidth: 100,
      dragToggleDistance: 30,
    };
  }

  componentDidMount(){
  
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  openSidebar(){
    this.setState({docked: !this.state.docked});
  }

  
  render() {
    var sidebarContent = <p>666</p>;
    const sidebar = <SidebarCon/>;
     const sidebarProps = {
        sidebar:sidebar,
        docked:this.state.docked,
        sidebarClassName: 'custom-sidebar-class',
        touch: this.state.touch,
        shadow: this.state.shadow,
        touchHandleWidth: this.state.touchHandleWidth,
        dragToggleDistance: this.state.dragToggleDistance,
        transitions: this.state.transitions
      };
    
    return (
      <div id="wrapper" className="content" >
        
         <Sidebar {...sidebarProps}>
          
        </Sidebar>  
       <Navbar fluid={true}  style={ {margin: 0} }>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Admin React</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={5} onClick = {this.openSidebar.bind(this)}><span><i className="fa fa-align-justify"></i></span></NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
                <MenuItem eventKey="1">
                  <span> <i className="fa fa-user fa-fw"></i> User Profile </span>
                </MenuItem>
                <MenuItem eventKey="2">
                  <span><i className="fa fa-gear fa-fw"></i> Settings </span>
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey = "3" href = 'http://www.strapui.com' >
                  <span> <i className = "fa fa-eye fa-fw" /> Premium React Themes </span>
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey = "4" onClick = {(event) => { history.push('/login');}}>
                  <span> <i className = "fa fa-sign-out fa-fw" /> Logout </span>
                </MenuItem>
              </NavDropdown>
          </Nav> 
        </Navbar>
       </div>
    );
  }
}

export default Main;