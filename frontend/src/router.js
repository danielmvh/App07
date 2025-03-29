import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import OrderList from './components/Orders/OrderList';
import OrderDetail from './components/Orders/OrderDetail';
import CreateOrder from './components/Orders/CreateOrder';
import ReportList from './components/Reports/ReportList';
import ReportDetail from './components/Reports/ReportDetail';
import CreateReport from './components/Reports/CreateReport';
import UserList from './components/Users/UserList';
import UserDetail from './components/Users/UserDetail';
import EditUser from './components/Users/EditUser';
import Settings from './components/Settings/Settings';
import ChangePassword from './components/Settings/ChangePassword';
import MessageList from './components/Messages/MessageList';
import SendMessage from './components/Messages/SendMessage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function AppRouter() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route path="/employee-dashboard" component={EmployeeDashboard} />
                <Route path="/orders" component={OrderList} />
                <Route path="/order/:id" component={OrderDetail} />
                <Route path="/create-order" component={CreateOrder} />
                <Route path="/reports" component={ReportList} />
                <Route path="/report/:id" component={ReportDetail} />
                <Route path="/create-report" component={CreateReport} />
                <Route path="/users" component={UserList} />
                <Route path="/user/:id" component={UserDetail} />
                <Route path="/edit-user/:id" component={EditUser} />
                <Route path="/settings" component={Settings} />
                <Route path="/change-password" component={ChangePassword} />
                <Route path="/messages" component={MessageList} />
                <Route path="/send-message" component={SendMessage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default AppRouter;