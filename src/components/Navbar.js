import React from 'react';
import { render } from 'react-dom';
import { withRR4, Nav, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const SideNav = withRR4();



class RR4 extends React.Component {

    constructor(props) {
        super(props);

    }

    renderDashboad = () => {
        return <div>Dashboard</div>;
    }

    renderSales = () => {
        return <div>Dupa</div> ;
    }

    renderProducts = () => {
        return <div>Products</div>;
    }


    render() {
        return (
            <Router>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{width: 220}}>
                        <SideNav default='dashboard' highlightBgColor='blue' highlightColor='white'>
                            <Nav id='dashboard'>
                                <NavText>  Dashboard </NavText>
                            </Nav>
                            <Nav id='sales'>
                                <NavText> Sales </NavText>
                                <Nav id='list'>
                                    <NavText> List Sales </NavText>
                                </Nav>
                            </Nav>
                            <Nav id='products'>
                                <NavText>  Products </NavText>
                            </Nav>
                        </SideNav>
                    </div>
                    <div style={{padding: 20}}>
                        <Route exact path="/" render={this.renderDashboad}/>
                        <Route path="/sales" render={this.renderSales}/>
                        <Route path="/products" render={this.renderProducts}/>
                    </div>
                </div>
            </Router>
        );
    }
}


export default RR4;
