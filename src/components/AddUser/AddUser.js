import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            txtUser:"",
            txtPhone: "",
            sltQuyen: "2"
        };
    }
    
    inputChange = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    submitForm = (e)=>{
        e.preventDefault();
        e.target.reset();
        const {txtUser,txtPhone,sltQuyen} = this.state;
        let user={};
        user.id = uuidv1();
        user.name=txtUser;
        user.phone=txtPhone;
        user.quyen = parseInt(sltQuyen,10);
        this.props.addUser(user);
        this.props.changeShowForm()
    }

    render() {
        return (
            <div className="col-4">
                <div className="card border-primary mb-3">
                    <div className="card-header text-center mb-3">Thêm mới</div>
                    <span style={{right: '0px', top: '-3px', position: 'absolute', width: '20px', height: '20px'}} onClick={()=> this.props.changeShowForm()}>
                        <i className="fa fa-window-close" aria-hidden="true" style={{fontSize: '20px'}} />
                    </span>
                    <form className="form-group" style={{padding: '0 1rem'}} onSubmit={ (e)=>this.submitForm(e)}>
                        <input type="text" className="form-control mb-3" name="txtUser" onChange={(e)=>this.inputChange(e)} aria-describedby="helpId" placeholder="User name" />
                        <input type="text" className="form-control mb-3" name="txtPhone" onChange={(e)=>this.inputChange(e)} aria-describedby="helpId" placeholder="Phone" />
                        <select className="custom-select mb-3" name="sltQuyen" defaultValue={2} onChange={(e)=>this.inputChange(e)} id="inputGroupSelect01">
                            <option value={1}>Admin</option>
                            <option value={2}>Thành viên</option>
                        </select>
                        <button className="btn btn-block btn-primary" type="submit" style={{boxShadow: 'none'}}>Thêm</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddUser;