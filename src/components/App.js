import React, {useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAccounts, fetchTransactions } from '../actions';
import PageTabs from './PageTabs';
import Accounts from './Accounts';
import Transactions from './Transactions';

const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchAccounts());
        dispatch(fetchTransactions());
    }, []);

    console.log(state);
    return (
        <div className="container-lg">
            <BrowserRouter>
                <PageTabs />
                <div>
                    <Route path="/" exact component={Accounts} />
                    <Route path="/transactions" component={Transactions} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;