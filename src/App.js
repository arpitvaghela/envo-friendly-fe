import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar'
import SearchResult from './components/searchResult'
import Cardlist from './components/cardlist'
import Listall from './components/listall'
import { render } from '@testing-library/react';
import LoginPage from './components/Login';
const categories = [
  {name:'ATTA, FLOURS & SOOJI'},
  {name:'BISCUITS & COOKIES'},
  {name:'BREADS & BUNS'},
  {name:'BREAKFAST CEREALS'},
  {name:'CUTS & SPROUTS'},
  {name:'DALS & PULSES'},
  {name:'DRY FRUITS'},
  {name:'ENERGY & SOFT DRINKS'},
  {name:'EXOTIC FRUITS & VEGGIES'},
  {name:'FRESH FRUITS'},
  {name:'FRESH VEGETABLES'},
  {name:'HERBS & SEASONINGS'},
  {name:'MASALAS & SPICES'},
  {name:'NOODLE, PASTA, VERMICELLI'},
  {name:'ORGANIC FRUITS & VEGETABLES'},
  {name:'READY TO COOK & EAT'},
  {name:'RICE & RICE PRODUCTS'},
  {name:'SALT, SUGAR & JAGGERY'},
  {name:'SPREADS, SAUCES, KETCHUP'}]
  
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search : '',
      userid:''
    }
    this.search_data.bind(this);
    this.getuserdata.bind(this);
  }

  search_data = (search)=>{
    this.setState({search:search})
  }
  getuserdata(id){
    this.setState({userid:id})
  }
render(){
  return (
    <>
      <Navbar search_f ={this.search_data.bind(this)}/>

      <main>
        <Sidebar menu={categories} />
        <Switch>
          <Route exact path='/' children={<Listall />} />
          {
            categories.map((category,index)=>{
              return(<Route key={index} exact path={'/'+category.name} children={<Cardlist category={category.name} />} />)
            })
          }
          <Route exact path='/search' children={<SearchResult query={this.state.search} />}/>
        </Switch>
      </main>
      <Route exact path='/login' children={<LoginPage click={this.getuserdata.bind(this)}/>}/>
      
    </>
  )};
}

export default App;
