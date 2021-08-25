import React from 'react';

// Import CSS
import './App.css';

// Import Components

import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

// Import Provider
import { GlobalProvider } from './context/GlobalState';
import { Footer } from './components/Footer';

function App() {
  return (
      <GlobalProvider>
        
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
          <Footer/>
        </div>
      </GlobalProvider>
  );
}

export default App;
