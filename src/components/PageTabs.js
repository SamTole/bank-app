import React from 'react';
import { Link } from 'react-router-dom';

class PageTabs extends React.Component {
    state = { currentPage: '/' };

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName });
    }

    render() {
        return (
            <ul className="bg-dark list-unstyled p-1 d-flex">
                <li>
                    <Link className={this.isActiveTab('/')} to="/"
                          onClick={event => this.onTabClick(event, '/')}>
                        Accounts
                    </Link>
                </li>
                <li>
                    <Link className={this.isActiveTab('/transactions')} to="/transactions"
                          onClick={event => this.onTabClick(event, '/transactions')}>
                        Transactions
                    </Link>
                </li>
            </ul>
        );
    }
}

export default PageTabs;