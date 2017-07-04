/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import {deepOrange500,redA700,darkWhite} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack, redA400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import Loading from './Loading';
const styles = {
  container: {
    textAlign: 'center',
  },
  btnStyle:{
    margin: 12,
  },
  moreStyle:{
    marginTop:"28",
    marginRight:"8",
    height: 42,
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const items = [
];

const bindItems = [
];


//var urlStr = 'https://app.gzmpc.com/NewMobilePlatform/';
//var urlStr = 'http://192.168.200.187:8080/NewMobilePlatform/';
//var urlStr = '';
var urlStr = '../../';
class Main extends Component {
  
	constructor(props, context) {
    super(props, context);
    this.state = {
      slideIndex:0,
      openTodo: false,
      openDoing: false,
      openDone: false,
      mtid:-1,
      errorcode:-1,
      errormsg:"",
      systemname:"",
      errortitle:"",
      credate:"",
      cremanname:"",
      todoItems:[],
      doingItems:[],
      doneItems:[],
      dialogStr:"",
      todoPage: 1,
      doingPage: 1,
      donePage: 1,
      preVal:'disabled',
      nextVal:'disabled',
      loading:true,
    };
  }

loadTodoData(pageNo){
  scroll(0,0);
  this.openLoading();
  var param = new Object(); 
      param.token = this.props.token;
      param.pageNo = pageNo;
      param.state = "1";
   $.ajax({ 
    url: urlStr+'api/maintenance/list',
    type : 'POST',
    contentType: 'application/x-www-form-urlencoded',
    //data : JSON.stringify(param),
    data : param,
    dataType: 'json', 
    success: function(data) 
    { 
      //alert(data.data.accountname);
      if(data.status==200){
          items.length = 0;
          this.setState({
              todoItems : items,
            });
          var i;
          if(data.data.length!=0)
          for (i=0;i<data.data.length;i++) {  
                //console.log("map["+key+"]"+map[key]); 
               items.push(
                <ListItem
                primaryText={data.data[i].systemname}
                secondaryText={
                  <table >
                    <tr>
                      <td width="180"><span className="glyphicon glyphicon-tags"></span> 错误代码</td>
                      <td width="180"><span className="glyphicon glyphicon-list-alt"></span> 错误说明</td>
                      <td width="220"><span className="glyphicon glyphicon-time"></span> 出错时间</td>
                      <td width="180"><span className="glyphicon glyphicon-user"></span> 报错人员</td>
                    </tr>
                    <tr> 
                      <td width="180" style={{color:redA700}}>{data.data[i].errorcode}</td>
                      <td width="180" style={{color:redA700}}>{data.data[i].errortitle}</td>
                      <td width="220" style={{color:redA700}}>{data.data[i].credate}</td>
                      <td width="180" style={{color: darkBlack}}>{data.data[i].cremanname}</td>
                    </tr>
                  </table>
                }
                secondaryTextLines={4}
                rightIconButton={<FlatButton
                label="详情"
                labelPosition="after"
                primary={true}
                style={styles.moreStyle}
                onClick = {this.openItem.bind(this,data.data[i].mtid,1)}
                icon={<MoreIcon />}/> }
              />
                );
              items.push( <Divider fullWidth={true} />);
            }
            if(i>0){
              //var tempPage = this.state.todoPage;
              this.setState({
               nextVal : "",
              });
              if(this.state.todoPage==1){
                this.setState({
                 preVal : "disabled",
                });
              }else{
                 this.setState({
                 preVal : "",
                });
              }
            }else{
              this.setState({
               nextVal : "disabled",
              });
            }
            if(data.data.length!=0){
              this.setState({
              todoItems : items,
            });
            }
            else{
              this.setState({
               nextVal : "disabled",
              });
               if(this.state.todoPage!=1){
                this.setState({
                 preVal : "",
                });
              }
            }
            scroll(0,0);
            this.closeLoading();
      }
     }.bind(this), 
     error: function(xhr, status, err) 
     { 
      this.closeLoading();
      alert(xhr.responseText);
      console.error(xhr.responseText);
     }.bind(this) 
    });
}

loadDoingData(pageNo){
  scroll(0,0);
  this.openLoading();
  var param = new Object(); 
      param.token = this.props.token;
      param.pageNo = pageNo;
      param.state = "2";
   $.ajax({ 
    url: urlStr+'api/maintenance/list',
    type : 'POST',
    contentType: 'application/x-www-form-urlencoded',
    //data : JSON.stringify(param),
    data : param,
    dataType: 'json', 
    success: function(data) 
    { 
      //alert(data.data.accountname);
      if(data.status==200){
          items.length = 0;
          this.setState({
              doingItems : items,
            });
          var i;
          if(data.data.length!=0)
          for (i=0;i<data.data.length;i++) {  
                //console.log("map["+key+"]"+map[key]); 
               items.push(
                <ListItem
                primaryText={data.data[i].systemname}
                secondaryText={
                  <table >
                    <tr>
                      <td width="180"><span className="glyphicon glyphicon-tags"></span> 错误代码</td>
                      <td width="180"><span className="glyphicon glyphicon-list-alt"></span> 错误说明</td>
                      <td width="220"><span className="glyphicon glyphicon-time"></span> 出错时间</td>
                      <td width="180"><span className="glyphicon glyphicon-user"></span> 报错人员</td>
                    </tr>
                    <tr> 
                      <td width="180" style={{color:redA700}}>{data.data[i].errorcode}</td>
                      <td width="180" style={{color:redA700}}>{data.data[i].errortitle}</td>
                      <td width="220" style={{color:redA700}}>{data.data[i].credate}</td>
                      <td width="180" style={{color: darkBlack}}>{data.data[i].cremanname}</td>
                    </tr>
                  </table>
                }
                secondaryTextLines={4}
                rightIconButton={<FlatButton
                label="详情"
                labelPosition="after"
                primary={true}
                style={styles.moreStyle}
                onClick = {this.openItem.bind(this,data.data[i].mtid,2)}
                icon={<MoreIcon />}/> }
              />
                );
              items.push( <Divider fullWidth={true} />);
            }
            if(i>0){
              //var tempPage = this.state.todoPage;
              this.setState({
               nextVal : "",
              });
              if(this.state.doingPage==1){
                this.setState({
                 preVal : "disabled",
                });
              }else{
                 this.setState({
                 preVal : "",
                });
              }
            }else{
              this.setState({
               nextVal : "disabled",
              });
            }
            if(data.data.length!=0){
              this.setState({
              doingItems : items,
            });
            }
            else{
              this.setState({
               nextVal : "disabled",
              });
              if(this.state.doingPage!=1){
                this.setState({
                 preVal : "",
                });
              }
            }
            scroll(0,0);
            this.closeLoading();
      }
     }.bind(this), 
     error: function(xhr, status, err) 
     { 
      this.closeLoading();
      alert(xhr.responseText);
      console.error(xhr.responseText);
     }.bind(this) 
    });
}
 
 loadDoneData(pageNo){
  scroll(0,0);
  this.openLoading();
  var param = new Object(); 
      param.token = this.props.token;
      param.pageNo = pageNo;
      param.state = "3";
   $.ajax({ 
    url: urlStr+'api/maintenance/list',
    type : 'POST',
    contentType: 'application/x-www-form-urlencoded',
    //data : JSON.stringify(param),
    data : param,
    dataType: 'json', 
    success: function(data) 
    { 
      //alert(data.data.accountname);
      if(data.status==200){
          items.length = 0;
          this.setState({
              doneItems : items,
            });
          var i;
          if(data.data.length!=0)
          for (i=0;i<data.data.length;i++) {  
                //console.log("map["+key+"]"+map[key]); 
               items.push(
                <ListItem
                primaryText={data.data[i].systemname}
                secondaryText={
                  <table >
                    <tr>
                      <td width="180"><span className="glyphicon glyphicon-tags"></span> 错误代码</td>
                      <td width="180"><span className="glyphicon glyphicon-list-alt"></span> 错误说明</td>
                      <td width="220"><span className="glyphicon glyphicon-time"></span> 出错时间</td>
                      <td width="180"><span className="glyphicon glyphicon-user"></span> 报错人员</td>
                    </tr>
                    <tr> 
                      <td width="180" style={{color:redA700}}>{data.data[i].errorcode}</td>
                      <td width="180" style={{color:redA700}}>{data.data[i].errortitle}</td>
                      <td width="220" style={{color:redA700}}>{data.data[i].credate}</td>
                      <td width="180" style={{color: darkBlack}}>{data.data[i].cremanname}</td>
                    </tr>
                  </table>
                }
                secondaryTextLines={4}
                rightIconButton={<FlatButton
                label="详情"
                labelPosition="after"
                primary={true}
                style={styles.moreStyle}
                onClick = {this.openItem.bind(this,data.data[i].mtid,3)}
                icon={<MoreIcon />}/> }
              />
                );
              items.push( <Divider fullWidth={true} />);
            }
            if(i>0){
              //var tempPage = this.state.todoPage;
              this.setState({
               nextVal : "",
              });
              if(this.state.donePage==1){
                this.setState({
                 preVal : "disabled",
                });
              }else{
                 this.setState({
                 preVal : "",
                });
              }
            }else{
              this.setState({
               nextVal : "disabled",
              });
            }
            if(data.data.length!=0){
              this.setState({
              doneItems : items,
            });
            }
            else{
              this.setState({
               nextVal : "disabled",
              });
              if(this.state.donePage!=1){
                this.setState({
                 preVal : "",
                });
              }
            }
            this.closeLoading();
            scroll(0,0);
      }
     }.bind(this), 
     error: function(xhr, status, err) 
     { 
      this.closeLoading();
      alert(xhr.responseText);
      console.error(xhr.responseText);
     }.bind(this) 
    });
}

  componentDidMount(){
     this.loadTodoData(1);
     //this.loadDoneData();
  }
  openLoading(){
    this.setState({loading:true});
  }
  closeLoading(){
    this.setState({loading:false});
  }

 handleChangeIndex = (value) => {
  if(value == 0)
    this.loadTodoData(this.state.todoPage);
  else if(value == 1)
    this.loadDoingData(this.state.doingPage);
  else if(value == 2)
    this.loadDoneData(this.state.donePage);
  //alert(value);
    this.setState({
      slideIndex: value,
    });
  };

  handleClose = () => {
    this.setState({openTodo: false});
    this.setState({openDoing: false});
    this.setState({openDone: false});
    this.setState({mtid: -1});
  };

  handleAccept = () =>{
     var param = new Object(); 
     param.token = this.props.token;
     param.mtid = this.state.mtid ;
     $.ajax({ 
      url: urlStr+'api/maintenance/accept',
      type : 'POST',
      contentType: 'application/x-www-form-urlencoded',
      data : param,
      dataType: 'json', 
      success: function(data) 
      { 
        if(data.status==200){
          alert('接单成功');
          this.handleClose();
          this.loadTodoData(this.state.todoPage);
          }
       }.bind(this), 
       error: function(xhr, status, err) 
       { 
        alert(xhr.responseText);
        console.error(xhr.responseText);
       }.bind(this) 
      });
  }

  handleSure = () =>{
     var param = new Object(); 
     param.token = this.props.token;
     param.mtid = this.state.mtid ;
     $.ajax({ 
      url: urlStr+'api/maintenance/confirm',
      type : 'POST',
      contentType: 'application/x-www-form-urlencoded',
      data : param,
      dataType: 'json', 
      success: function(data) 
      { 
        if(data.status==200){
          alert('提交成功');
          this.handleClose();
          this.loadDoingData(this.state.doingPage);
          }
       }.bind(this), 
       error: function(xhr, status, err) 
       { 
        alert(xhr.responseText);
        console.error(xhr.responseText);
       }.bind(this) 
      });
  }

  openItem(mtid,flag){
   var param = new Object(); 
   param.mtid = mtid ;
   $.ajax({ 
    url: urlStr+'api/maintenance/detail',
    type : 'POST',
    contentType: 'application/x-www-form-urlencoded',
    data : param,
    dataType: 'json', 
    success: function(data) 
    { 
      if(data.status==200){
          this.setState({
            dialogStr: data.data.errormsg,
          });
        }
     }.bind(this), 
     error: function(xhr, status, err) 
     { 
      alert(xhr.responseText);
      console.error(xhr.responseText);
     }.bind(this) 
    });
    if(flag == 1)
      this.setState({
        openTodo: true,
        mtid: param.mtid,
      });
    else if(flag == 2)
      this.setState({
        openDoing: true,
        mtid: param.mtid,
      });
    else if(flag == 3)
      this.setState({
        openDone: true,
        mtid: param.mtid,
      });

  }

  handleTodoPre(){
    if("disabled"!=this.state.preVal){
      var temp = this.state.todoPage;
      if(temp>0){
          this.loadTodoData(temp-1);
          this.setState({
            todoPage: temp-1,
          });
      }
    }
  }

  handleTodoNext(){
    if("disabled"!=this.state.nextVal){
      var temp = this.state.todoPage;
      this.loadTodoData(temp+1);
      this.setState({
        todoPage: temp+1,
      });
    }
  }

  handleDoingPre(){
    if("disabled"!=this.state.preVal){
      var temp = this.state.doingPage;
      if(temp>0){
          this.loadDoingData(temp-1);
          this.setState({
            doingPage: temp-1,
          });
      }
    }
  }

  handleDoingNext(){
    if("disabled"!=this.state.nextVal){
      var temp = this.state.doingPage;
      this.loadDoingData(temp+1);
      this.setState({
        doingPage: temp+1,
      });
    }
  }

  handleDonePre(){
    if("disabled"!=this.state.preVal){
      var temp = this.state.donePage;
      if(temp>0){
          this.loadDoneData(temp-1);
          this.setState({
            donePage: temp-1,
          });
      }
    }
  }

  handleDoneNext(){
    if("disabled"!=this.state.nextVal){
      var temp = this.state.donePage;
      this.loadDoneData(temp+1);
      this.setState({
        donePage: temp+1,
      });
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <Tabs
          onChange={this.handleChangeIndex}
          value={this.state.slideIndex}
        >
          <Tab label="待处理" value={0} />
          <Tab label="已接单" value={1} />
          <Tab label="已处理" value={2} />
      </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChangeIndex}
          disabled={true}
        >
		    <div >
            <List>
            {this.state.todoItems}
           <Dialog
              actions={[
                         <RaisedButton 
                         label="接单" 
                         primary={true} 
                         style={styles.btnStyle}
                         onClick={this.handleAccept} 
                         />,
                         <RaisedButton 
                         label="关闭" 
                         secondary={true} 
                         style={styles.btnStyle}
                         onClick={this.handleClose}
                         />
                      ]}
              modal={false}
              open={this.state.openTodo}
              onRequestClose={this.handleClose}
            >
            {this.state.dialogStr}
             </Dialog>

               <nav>
                <ul className="pager">
                  <li className={this.state.preVal}  ><a href="javascript:void(0);"  onClick={this.handleTodoPre.bind(this)}>上一页</a></li>
                  <li className={this.state.nextVal}><a href="javascript:void(0);"  onClick={this.handleTodoNext.bind(this)}>下一页</a></li>
                </ul>
              </nav>
            </List>
           
		    </div>
	      
		    <div>
		      <List>
            {this.state.doingItems}
            <Dialog
              actions={[
                         <RaisedButton 
                         label="处理" 
                         primary={true} 
                         style={styles.btnStyle}
                         onClick={this.handleSure} 
                         />,
                         <RaisedButton 
                         label="关闭" 
                         secondary={true} 
                         style={styles.btnStyle}
                         onClick={this.handleClose}
                         />
                      ]}
              modal={false}
              open={this.state.openDoing}
              onRequestClose={this.handleClose}
            >
            {this.state.dialogStr}
          </Dialog>
          <nav>
            <ul className="pager">
              <li className={this.state.preVal} ><a href="javascript:void(0);"  onClick={this.handleDoingPre.bind(this)}>上一页</a></li>
              <li className={this.state.nextVal}><a href="javascript:void(0);"  onClick={this.handleDoingNext.bind(this)}>下一页</a></li>
            </ul>
          </nav>
          </List>   
		    </div>
          
		    <div>
		      <List>
            {this.state.doneItems}
            <Dialog
              actions={[
                       
                         <RaisedButton 
                         label="关闭" 
                         secondary={true} 
                         style={styles.btnStyle}
                         onClick={this.handleClose}
                         />
                      ]}
              modal={false}
              open={this.state.openDone}
              onRequestClose={this.handleClose}
            >
            {this.state.dialogStr}
             </Dialog>
            <nav>
                <ul className="pager">
                 <li className={this.state.preVal} ><a href="javascript:void(0);"  onClick={this.handleDonePre.bind(this)}>上一页</a></li>
                 <li className={this.state.nextVal}><a href="javascript:void(0);"  onClick={this.handleDoneNext.bind(this)}>下一页</a></li>
                </ul>
              </nav>
          </List>
		    </div>
        </SwipeableViews>
        <Loading loading={this.state.loading}  />
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default Main;