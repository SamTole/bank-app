import React from 'react';
import { connect } from 'react-redux';

class Transactions extends React.Component {
    render() {
        let transactions = this.props.transactions;

        return (
            <div className="list-group">
                {transactions.map((transaction) => {
                    return (
                        <ul className="d-flex justify-content-between list-group-item list-unstyled p-3">
                            <li className="font-weight-bold">{ transaction.accountName }</li>
                            <li>{ transaction.name }</li>
                            <li className="badge badge-secondary badge-pill">{ transaction.type }: ${ transaction.amount }</li>
                        </ul>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        transactions: state.transactions
    }
}

export default connect(mapStateToProps)(Transactions);