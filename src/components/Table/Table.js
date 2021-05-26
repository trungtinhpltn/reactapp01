import React, { Component } from 'react';
import AddUser from '../AddUser/AddUser';
import EditUser from '../EditUser/EditUser';
import TableRow from './TableRow';

class Table extends Component {

    showButton = () =>{
        if( this.props.showForm){
            return (
                <div className="btn btn-danger btn-add" onClick={ ()=> this.props.changeShowForm() }>Đóng</div>
            ) 
        }
        else{
            return (<div className="btn btn-primary btn-add" onClick={ ()=> this.props.changeShowForm() } >Thêm</div>)
        }
    }

    showForm = () =>{
        if( this.props.showForm){
            return <AddUser addUser={(user)=>this.props.add(user)} changeShowForm={()=> this.props.changeShowForm()}></AddUser>
        }
        if( this.props.showEdit){
            return <EditUser saveEditUserFuc={ (user)=>this.props.saveEditUserFuc(user)} user={this.props.user} changeShowEditFormFun={ ()=>this.props.changeShowEditFormFun()}></EditUser>
        }
    }


    
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Điện thoại</th>
                                    <th>Quyền</th>
                                    <th>
                                        <div className="btn-group">
                                            {
                                                this.showButton()
                                            }
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.dataTable.map( (val,index) => {
                                        return <TableRow deleteUserFun={(user)=>this.props.deleteUserFun(val)} showButton={this.props.showForm} editUserFun={(user)=>this.props.editFun(val)} key={index} tel={val.phone} stt={index} quyen={val.quyen} >{val.name}</TableRow>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    {
                        this.showForm()
                    }
                </div>
            </div>
        );
    }
}

export default Table;