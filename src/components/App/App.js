import React, { Component } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Table from '../Table/Table';
import myData from './Data.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: myData,
      showForm: false,
      showEditUser: false,
      txtSearch: "",
      user:{}
    };
  }
  
  componentWillMount() {
    if(localStorage.getItem("users") === null){
      localStorage.setItem("users", JSON.stringify(myData))
    }
    else{
      this.setState({
        users: JSON.parse(localStorage.getItem("users"))
      });
    }
  }
  
  changeShowForm = () =>{
    if(!this.state.showEditUser)
      this.setState({
        showForm: !this.state.showForm
      });
  }

  getTextSearch = (data)=>{
    this.setState({
      txtSearch: data
    });
  }

  changeShowEditForm = () =>{
    this.setState({
      showEditUser: !this.state.showEditUser
    });
  }

  editUser = (user) =>{
    if(!this.state.showForm){
      this.setState({
        showEditUser: !this.state.showEditUser,
        user: user
      });
    }
  }

  saveEditUser = (user)=>{
    this.state.users.forEach( (item)=>{
      if( item.id === user.id){
        item.name=user.name;
        item.phone=user.phone;
        item.quyen=user.quyen;
      }
    })
    localStorage.setItem("users", JSON.stringify(this.state.users))
  }

  addUser = (user)=>{
    this.state.users.push(user)
    this.setState({
      users: this.state.users
    });
    localStorage.setItem("users", JSON.stringify(this.state.users))
  }

  deleteUser = (user) =>{
    // this.setState({
    //   showForm: false,
    //   showEditUser: false
    // });
    // this.state.users.forEach( (item,index)=>{
    //   if(item.id === user.id){
    //     this.state.users.splice(index,1);
    //   }
    // })

    var result = this.state.users.filter( item => item.id !== user.id)
    this.setState({
      users: result
    });
    localStorage.setItem("users", JSON.stringify(result))
  }
    
  render() {
    var dataRender = [];
    this.state.users.forEach( (item)=>{
      if( item.name.indexOf(this.state.txtSearch) !==-1 ){
        dataRender.push(item);
      }
    })
      
    return (
      <div>
        <Header></Header>
        <Search getSearch={(data)=> this.getTextSearch(data)}></Search>
        <Table deleteUserFun={(user)=>this.deleteUser(user)}  saveEditUserFuc={ (user)=>this.saveEditUser(user)} user={this.state.user}
        changeShowEditFormFun={ ()=>this.changeShowEditForm()} showEdit={this.state.showEditUser} 
        editFun={(user)=>this.editUser(user)} dataTable={dataRender} showForm={this.state.showForm} 
        changeShowForm={ ()=> this.changeShowForm()} add={(user)=>this.addUser(user)}></Table>
      </div>
    );
  }
}

export default App;