import axios from 'axios';

export const fetchAccounts = () => async (dispatch, getState) => {
    const response = await axios.get('http://my-json-server.typicode.com/svt25/Project3DB/accounts');

    dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: response.data
    });
}

export const fetchTransactions = () => async (dispatch, getState) => {
    const response = await axios.get('http://my-json-server.typicode.com/svt25/Project3DB/transactions');

    dispatch({
        type: 'FETCH_TRANSACTIONS',
        payload: response.data
    });
}

export const editAccount = (accountId, name, balance) => {
    return {
        type: 'EDIT_ACCOUNT',
        payload: {
            accountId, name, balance
        }
    }
}

export const deleteAccount = (accountId) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: accountId
    }
}

export const transactionAmount = (accountId, accountName, balance, amount, transactionName, type) => {
    return {
        type: 'TRANSACTION_AMOUNT',
        payload: {
            accountId, accountName, amount, balance, transactionName, type
        }
    }
}

