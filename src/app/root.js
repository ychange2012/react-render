import React, {Component} from 'react';



class Main extends Component {
  
  constructor(props, context) {
    super(props, context);
     
  }

  componentDidMount(){
    
  }


  render() {
   
    
    return (
      <div>
        <h2>root page</h2>
       {this.props.children}
      </div> 
    );
  }
}


export default Main;