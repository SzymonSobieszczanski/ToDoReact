import React, { Component } from "react";
import "./App.css";
import { withRR4, Nav, NavText,NavIcon } from 'react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ToDos from "./components/ToDos";
import Settlements from "./components/settlement";
import ShoppingList from "./components/ShoppingList";
import styled from 'styled-components';


import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { cart } from 'react-icons-kit/icomoon/cart'; 
import { checkmark } from 'react-icons-kit/icomoon/checkmark';   
import { spoonKnife } from 'react-icons-kit/icomoon/spoonKnife';   
import { coinDollar } from 'react-icons-kit/icomoon/coinDollar';    
const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;
const SideNav = withRR4();





const SeparatorTitleContainer = styled.div`
font-size: 14px;
color: #AAA;
margin: 10px 12px;
padding: 4px 12px 2px;
`;

const SeparatorTitle = props => {
return (
    <SeparatorTitleContainer>
        {props.children}
        <hr style={{ border: 0, borderTop: '1px solid #E5E5E5' }} />
    </SeparatorTitleContainer>
);
};
const NavMain = {
  today: { title: 'Today', icon: ic_aspect_ratio },
  nextWeek: { title: 'Next Week', icon: ic_business_center },
  completed: { title: 'Completed', icon: checkmark }
};

class App extends Component {
  constructor() {
    super();

}

renderToday = () => {
    return <div><ToDos pathvalue={"today"}/></div>;
}

renderSales = () => {
    return <div><ToDos/></div> ;
}

renderProducts = () => {
    return <div><ShoppingList/></div>;
}
renderNextWeek = () =>
{

  return <div>Next Week Tasks</div>
}
renderCompleted = () => 
{
  return <div>completed</div>
}


render() {
    return (
        <Router>
            <div>
            <div className='navigation'>   
          
               <SideNav
                highlightBgColor="rgba(0, 0, 0, 0.5)"
                defaultSelected="today"
                highlightColor="#ffffff"
            >
                <SeparatorTitle><div>To Do</div></SeparatorTitle>
                {Object.keys(NavMain).map(key => {
                    //dynamically created the navs
                    return (
                        <Nav key={key} id={key}>
                            <NavIcon><Icon20 icon={NavMain[key].icon} /></NavIcon>
                            <NavText> {NavMain[key].title} </NavText>
                        </Nav>
                    );
                })}
                <SeparatorTitle>
                    <div> Shoping List</div>
                </SeparatorTitle>
                <Nav id="customers">
                    <NavIcon><Icon20 icon={cart} /></NavIcon>
                    <NavText> Shoping List </NavText>
                                    
                </Nav>
                <Nav id="sales">
                    <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> History </NavText>
                </Nav>
                <SeparatorTitle>
                    <div> Settlements Calc</div>
                </SeparatorTitle>
                <Nav id="settlements">
                    <NavIcon><Icon20 icon={coinDollar} /></NavIcon>
                    <NavText> Settlements</NavText>
                                    
                </Nav>
                <SeparatorTitle>
                    <div> Recipes</div>
                </SeparatorTitle>
                <Nav id="recipes">
                    <NavIcon><Icon20 icon={spoonKnife} /></NavIcon>
                    <NavText> Recipes </NavText>
                    
                    <Nav id="Category 3">
                    <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Category 1 </NavText>
                    </Nav>
                    <Nav id="Category 3">
                    <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Category 2 </NavText>
                    </Nav>
                    <Nav id="Category 3">
                    <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Category 3 </NavText>
                    </Nav>
                    <Nav id="Category 3">
                    <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Category 4 </NavText>
                    </Nav>
                    <Nav id="Category 3">
                    <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Category 5 </NavText>
                    </Nav>
                                    
                </Nav>
              


            </SideNav>;

                </div>

                <div className="render-div">
                    <Route exact path="/" render={this.renderToday}/>
                    <Route path="/sales" render={({match})=> (<ToDos/>)}/>
                    <Route path="/today" render={({match})=> (<ToDos />)}/>
                    <Route path="/products" render={this.renderProducts}/>
                    <Route path="/nextWeek" render={({match})=> (<ToDos/>)}/>
                    <Route path="/completed" render={({match})=> (<ToDos/>)}/>
                    <Route path="/settlements" render={({match})=> (<Settlements/>)}/>
                </div>
            </div>
        </Router>
    );
}
}

export default App;















/*    <Router>

        
      <div className="cotainer">
        <ul>
          <h2>
            <Link to="/">Home</Link>
          </h2>
          <h2>
            <Link to="/shoppingList">About</Link>
          </h2>
        </ul>
        <div className="header-bar" />
        <Route exact path="/" component={Heroes} />
        <Route path="/shoppingList" component={ShoppingList} />
      
      </div>
    </Router> */