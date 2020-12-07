import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './header'


class Layout extends React.Component {
    
    render() {
        return (
            <>
                <Header />
                {this.props.children}
                <ToastContainer />
            </>
        );
    }
}


export default Layout;