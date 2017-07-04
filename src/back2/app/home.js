import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {deepOrange500,redA700,darkWhite} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


class Main extends Component {
  
  constructor(props, context) {
    super(props, context);
  }

 
  componentDidMount(){
    
  }

  render() {
    
    const AppBarExampleIcon = () => (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBarExampleIcon/>
      </div> 
      </MuiThemeProvider>
    );
  }
}

export default Main;