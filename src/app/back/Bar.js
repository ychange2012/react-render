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

 doSomething = () => {
        require.ensure(['./app2'], (require) => {
            const Comp = require('./app2');
            this.setState({
                currentComponent: <Comp/>
            })
        })
    };

  render() {
    
   

    return (
    <div>
      <span onClick={this.doSomething} style={{border: "1px solid #000"}}>点击后，按需加载如下模块</span>
      {this.state.currentComponent}
    </div>
    );
  }
}

export default Main;