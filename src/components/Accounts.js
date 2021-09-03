import React from 'react';
import { connect } from 'react-redux';

import EditAccount from './EditAccount';
import AddTransaction from './AddTransaction';

class Accounts extends React.Component {
    render() {
        let accounts = this.props.accounts;

        return (
            <div className="row">
                {accounts.map((account) => {
                    let accountId = account._id;
                    return (
                        <ul className="card text-center col-sm-5 list-unstyled p-3 mx-auto">
                            <li className="h3">{ account.name }</li>
                            <li className="mb-2"><span className="font-weight-bold">Balance:</span> ${ account.balance }</li>
                            <EditAccount id={ accountId }  />
                            <AddTransaction id={ accountId } accountName={ account.name } balance={ account.balance } />
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

export default connect(mapStateToProps)(Accounts);