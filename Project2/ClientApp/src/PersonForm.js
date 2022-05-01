import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { first, last, age, onAddClick, onTextFirstChange, onTextLastChange, onTextAgeChange, onClearClick } = this.props;
        return (
            <div className='row jumbotron'>
                <div className='col-md-3'>
                    <input value={first} onChange={onTextFirstChange} placeholder="First Name" className="form-control"  />
                </div>
                <div className='col-md-3'>
                    <input value={last} onChange={onTextLastChange} placeholder="Last Name" className="form-control" />
                </div>
                <div className='col-md-3'>
                    <input value={age} onChange={onTextAgeChange} placeholder="Age Name" className="form-control" />
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-primary" onClick={onAddClick}>Add</button>
                    <button className="btn btn-warning ml-3" onClick={onClearClick}>Clear All</button>
                </div>
            </div>
        )
    }
}

export default PersonForm;