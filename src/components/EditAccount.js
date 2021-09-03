import React from 'react';
import { connect } from 'react-redux';

import { editAccount, deleteAccount } from '../actions';

class EditAccount extends React.Component {
    state = {
        name: '',
        balance: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.editAccount(this.props.id, this.state.name, parseFloat(this.state.balance));
        this.setState({ name: '', balance: '' });
    }

    render() {
        return (
            <form className="mb-3" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" value={this.state.name}
                           placeholder="Edit Account Name"
                           onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" value={this.state.balance}
                           placeholder="Edit Balance"
                           onChange={(e) => this.setState({ balance: e.target.value })} />
                </div>
                <input type="submit" className="btn btn-success w-50" value="Edit" />
                <input type="button" className="btn btn-danger w-50" value="Delete"
                       onClick={() => { this.props.deleteAccount(this.props.id) }} />
            </form>
        );
    }
}

export default connect(null, { editAccount, deleteAccount })(EditAccount);