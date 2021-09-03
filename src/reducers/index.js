const DEFAULT_STATE = {
    accounts: [],
    transactions: []
}

const getData = (state, action, data) => {
    let newState = {
        accounts: [ ...state.accounts ],
        transactions: [ ...state.transactions ]
    }

    data.forEach(value => {
        if (action === 'FETCH_ACCOUNTS') {
            newState.accounts.push(value);
        }
        else if (action === 'FETCH_TRANSACTIONS') {
            newState.transactions.push(value);
        }
    });

    return newState;
}

const dataReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            let accountAction = action.type;
            let accounts = action.payload;

            return getData(state, accountAction, accounts);

        case 'FETCH_TRANSACTIONS':
            let transactionsAction = action.type;
            let transactions = action.payload;

            return getData(state, transactionsAction, transactions);

        case 'EDIT_ACCOUNT':
            let editState = {
                accounts: [ ...state.accounts ],
                transactions: [ ...state.transactions ]
            }

            const editIndex = editState.accounts.findIndex(char => {
                return char._id === action.payload.accountId;
            });

            editState.accounts[editIndex] = {
                _id: action.payload.accountId,
                name: action.payload.name,
                balance: action.payload.balance
            }

            return editState;

        case 'DELETE_ACCOUNT':
            let deleteState = {
                accounts: [ ...state.accounts ],
                transactions: [ ...state.transactions ]
            }

            const deleteIndex = deleteState.accounts.findIndex(char => {
                return char._id === action.payload;
            });

            deleteState.accounts.splice(deleteIndex, 1);

            return deleteState;

        case 'TRANSACTION_AMOUNT':
            let transactionState = {
                accounts: [ ...state.accounts ],
                transactions: [ ...state.transactions ]
            }

            const transactionIndex = transactionState.accounts.findIndex(char => {
                return char._id === action.payload.accountId;
            });

            transactionState.accounts[transactionIndex] = {
                _id: action.payload.accountId,
                name: action.payload.accountName,
                balance: action.payload.balance
            }

            transactionState.transactions.push({
                _id: transactionState.transactions.length,
                accountName: action.payload.accountName,
                accountId: action.payload.accountId,
                type: action.payload.type,
                amount: action.payload.amount,
                name: action.payload.transactionName
            });

            return transactionState;

        default:
            return state;
    }
}

export default dataReducer;