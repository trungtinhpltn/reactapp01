import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ""
        };
    }
    
    inputChange = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
        this.props.getSearch(value);
    }
    submitForm = (e)=>{
        e.preventDefault();
        this.props.getSearch(this.state.txtSearch);
    }
    render() {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="btn-group">
                            <div className="form-group" style={{marginBottom: 0}}>
                                <input type="text" className="form-control" name="txtSearch" onChange={ (e) => this.inputChange(e)} aria-describedby="helpId" placeholder="Nhập từ khóa tìm kiếm" style={{width: '600px'}} />
                            </div>
                            <div className="btn btn-info" onClick={(e)=>this.submitForm(e)}>
                                Tìm
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;