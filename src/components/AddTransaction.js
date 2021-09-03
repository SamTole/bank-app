import React from 'react';
import { connect } from 'react-redux';

import { transactionAmount } from '../actions';

class AddTransaction extends React.Component {
    state = {
        name: '',
        amount: '',
        balance: '',
        type: ''
    }

    calculateBalance = (balance, amount) => {
        let newBalance = balance + parseFloat(amount);

        if (newBalance > balance) {
            this.setState({ type: 'deposit' });
        }
        else {
            this.setState({ type: 'withdraw' })
        }

        this.setState({ balance: newBalance });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.transactionAmount(this.props.id, this.props.accountName, this.state.balance,
            this.state.amount, this.state.name, this.state.type);
        this.setState({ name: '', amount: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" value={this.state.name}
                           placeholder="Transaction Name"
                           onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" value={this.state.amount}
                           placeholder="Transaction Amount"
                           onChange={(e) => this.setState({ amount: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-success w-50"
                        onClick={() => { this.calculateBalance(this.props.balance, this.state.amount) }}>
                    Deposit
                </button>
                <button type="submit" className="btn btn-danger w-50"
                        onClick={() => {
                            this.calculateBalance(this.props.balance, -(this.state.amount)) }}>
                    Withdraw
                </button>
            </form>
        );
    }
}

export default connect(null, { transactionAmount })(AddTransaction);