/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';


class Main extends Component {
  
	constructor(props, context) {
    super(props, context);
    this.state = {
      currentComponent: null
    };
  }
/*
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll.bind(this));
  }

  handleScroll(e){
    console.log('sssssss');
  }
  */
  render() {
    
   

    return (
    <div>
      <h2>test</h2>
     
    </div>
    );
  }
}

export default Main;