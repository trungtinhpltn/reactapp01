import React, { Component } from 'react';

class TableRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.children}</td>
                <td>{this.props.tel}</td>
                <td>{this.props.quyen === 1?"Admin":"Thành viên"}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={ ()=>this.props.editUserFun()}><i className="fa fa-edit sua">Sửa</i></div>
                        <div className="btn btn-danger xoa" onClick={ ()=>this.props.deleteUserFun()}><i className="fa fa-edit xoa">Xóa</i></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;