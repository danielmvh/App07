import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import AdminDashboard from './components/dashboard/AdminDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/employee/dashboard" component={EmployeeDashboard} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;