import React, {Component} from 'react';
import Loading from 'react-loading';

const styles = {
  layout: {
    position: 'absolute',
    top: '48%',
    left: '48%',
    width: '20%',
    height: '20%',
    zIndex: 1001,
    textAlign:'center',
  },
  over:{
  	position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#cccccc',
    opacity:0.5,
    zIndex: 1000,
  }
};

class Main extends Component {
	render() {
		if(this.props.loading==true){
			return (
			<div>
				<div style={styles.layout}>
					<Loading type='bars' color='#1c1b1b' />
				</div>
				<div style={styles.over}></div>
			</div>
			);
		}else{
			return (null);
		}
	}
}
export default Main;