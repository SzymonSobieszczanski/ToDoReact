import React, { Component } from 'react';
import EditToDo from './EditToDo';
import ToDo from './ToDo';
import api from '../api';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Heroes extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      heroes: [],
      creatingHero: false,
      searchString: '',
      nextId: '',
      groupedList: [],
      query:'',
      selectedHero: ''
   
   
    

    
    };
    this.searchToDo = this.searchToDo.bind(this);
    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.sortByIdAsc = this.sortByIdAsc.bind(this);
    this.sortByIdDesc = this.sortByIdDesc.bind(this);
  

  }

 componentDidMount() {

  console.log('Will mount');  
  var str = this.props.match.url; 
  var res = str.split('/');
  var result = res[1];
  
    api.get(result).then(json => this.setState({ heroes: json }));
   
  }





  handleSelect(hero) {
    this.setState({ selectedHero: hero });
  }

  handleDelete(event, hero) {
    event.stopPropagation();

    api.destroy(hero).then(() => {
      let heroes = this.state.heroes;
      heroes = heroes.filter(h => h !== hero);
      this.setState({ heroes: heroes });

      if (this.selectedHero === hero) {
        this.setState({ selectedHero: null });
      }
    });
  }



  handleEnableAddMode() {
 
    this.setState({
      addingHero: true,
  
      selectedHero: {name: '',date: '',completed: false }
    });
  }

  handleCancel() {
    this.setState({ addingHero: false, selectedHero: null });
  }

  handleSave() {
    let heroes = this.state.heroes;

    if (this.state.addingHero) {
      api
        .create(this.state.selectedHero)
        .then(result => {
          console.log('Successfully created!');

          heroes.push(this.state.selectedHero);
          this.setState({
            heroes: heroes,
            selectedHero: null,
            addingHero: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedHero)
        .then(() => {
          this.setState({ selectedHero: null });
        })
        .catch(err => {});
    }
  }

  handleCompleted(event, hero) {
    event.stopPropagation();
    api.completed(hero).then(() => {
      
      let heroes = this.state.heroes;
      heroes = heroes.filter(h => h !== hero);
      this.setState({ heroes: heroes });

      if (this.selectedHero === hero) {
        this.setState({ selectedHero: null });
      }
    });
  }



  handleOnChange(event) {
    let selectedHero = this.state.selectedHero;
    selectedHero[event.target.name] = event.target.value;
    this.setState({ selectedHero: selectedHero });
  }
  searchToDo(e)
  {
    this.setState({searchString:e.target.value});      
  }

  handleSearch()
  {  
let sortbyDate = this.state.heroes.sort((a,b)=> Date.parse(new Date(a.date.split("/").reverse().join("-")))-
Date.parse(new Date(b.date.split("/").reverse().join("-"))));
this.setState({heroes: sortbyDate});
  }
  sortByIdAsc()
  {
let sortById = this.state.heroes.sort(function(a,b){return a.id - b.id});
this.setState({heroes: sortById});




  }
  sortByIdDesc()
  {
   
    let sortById = this.state.heroes.sort(function(a,b){return b.id - a.id});
    this.setState({heroes: sortById});
  }

 

  render() {


 /*function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
          map.set(key, [item]);
      } else {
          collection.push(item);
      }
  });
  return map;
}  
   var temparray = groupBy(this.state.heroes,hero => hero.date);
*/
    var heroesList = this.state.heroes,
    searchString = this.state.searchString.trim().toLowerCase();
    if(searchString.length > 0)
    {
    heroesList = heroesList.filter(function(l){
      return l.name.toLowerCase().match(searchString);
    });
    }

    const items = heroesList.map(hero => {
return(



<div key={hero._id} className="tododiv">
<ToDo         

  hero={hero}
  onSelect={this.handleSelect}
  onDelete={this.handleDelete}
  selectedHero={this.state.selectedHero}
  onComplete={this.handleCompleted}
/>   
</div>


)
 })



    return (
    
        
<div>


<div className="row">
  <div className="searchdiv">   

  <input className="searchinput"placeholder="Search" value={this.state.searchString} onChange={this.searchToDo}/>
  </div>
  <button onClick={this.handleEnableAddMode}>Add ToDo</button>

         
      

        </div>


        <div className="editarea">
       
          <EditToDo
            addingHero={this.state.addingHero}
            onChange={this.handleOnChange}
            selectedHero={this.state.selectedHero}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
            
          />
         

        </div>
     <div>   
     <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
  </ReactCSSTransitionGroup>
        </div>



        </div>
          
        
     

    );
  }
}

export default withRouter(Heroes);
