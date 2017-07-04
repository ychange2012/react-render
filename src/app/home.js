import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from './actions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {Router,Route,IndexRoute,hashHistory,browserHistory} from 'react-router';

class Main extends Component {
  
  constructor(props, context) {
    super(props, context);
     //let {state,dispatch} = ;
  }

  componentDidMount(){
    
  }

  submitMethod(){
    let {dispatch} = this.props;
    //let tempaction = this.props.actions.addyear(dispatch,'8989');
    //dispatch(tempaction);
    //dispatch(this.props.actions.addyear(dispatch,'8989'));
    //alert('ok');
    //this.props.dispatch({});
    this.props.addyear(dispatch,this.props.year);
    //this.props.dispatch(action.addyear(this.props.state));
  }

   submitMethod2(){
    //alert('ok');
    //this.props.dispatch({type:'add',value: '2323'});
    // let {dispatch} = this.props;
    //this.props.actions.subyear(dispatch,'8989');
    //this.props.dispatch(action.addyear(this.props.state));
    browserHistory.push('/index');
  }
  
  test(){
    alert('okokok');
  }

  render() {
   
    
    return (
      <div>
        <h2>hello redux Home page {this.props.year}</h2>
        <br/>
          <Link to="/index" onClick={this.test.bind(this)}>跳转index</Link>
        <br/>
        <input type="submit" value="add year" onClick={this.submitMethod.bind(this)}/>
        <br/>
        <input type="submit" value="sub year" onClick={this.submitMethod2.bind(this)}/>
      </div> 
    );
  }
}

function mapStateToProps(state) {
      return {
        year: state.year,
      }
    }
/*
function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(action,dispatch)
  }
}
*/
export default connect(mapStateToProps,action)(Main);