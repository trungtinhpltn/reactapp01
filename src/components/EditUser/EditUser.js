import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            txtUser: this.props.user.name,
            txtPhone: this.props.user.phone,
            sltQuyen: this.props.user.quyen
        };
    }

    inputChange=(e)=>{
        const target=e.target;
        const name=target.name;
        const value=target.value;
        this.setState({
            [name]: value
        });
    }
    
    submitForm = (e)=>{
        e.preventDefault();
        let user={};
        user.id=this.state.id;
        user.phone=this.state.txtPhone;
        user.name=this.state.txtUser;
        user.quyen=parseInt(this.state.sltQuyen,10);
        this.props.saveEditUserFuc(user);
        this.props.changeShowEditFormFun();
    }

    render() {
        return (
            <div className="col-4">
                <div className="card border-primary mb-3">
                    <div className="card-header text-center mb-3">Thay đổi thông tin người dùng</div>
                    <span style={{right: '0px', top: '-3px', position: 'absolute', width: '20px', height: '20px'}} onClick={()=> this.props.changeShowEditFormFun()}>
                        <i className="fa fa-window-close" aria-hidden="true" style={{fontSize: '20px'}} />
                    </span>
                    <form className="form-group" style={{padding: '0 1rem'}} onSubmit={(e)=>this.submitForm(e)}>
                        <input type="text" className="form-control mb-3" name="txtUser" defaultValue={this.props.user.name} onChange={(e)=>this.inputChange(e)} placeholder="User name" />
                        <input type="text" className="form-control mb-3" name="txtPhone" defaultValue={this.props.user.phone} onChange={(e)=>this.inputChange(e)} placeholder="Phone" />
                        <select className="custom-select mb-3" name="sltQuyen" defaultValue={this.props.user.quyen} onChange={(e)=>this.inputChange(e)}>
                            <option value={1}>Admin</option>
                            <option value={2}>Thành viên</option>
                        </select>
                        <button className="btn btn-block btn-primary" type="submit" style={{boxShadow: 'none'}}>Lưu</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;