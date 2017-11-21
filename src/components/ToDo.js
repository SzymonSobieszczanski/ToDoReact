import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-transition-group'
const ToDo = props => {
  console.log(props);
  return (

<div className="todosinglediv">


<div className="todoradio">
<input type="radio" value="option1" checked={false} onChange={e => props.onComplete(e, props.hero)}/>
</div>
   
   <div className="todoname">  
      <div    onClick={() => props.onSelect(props.hero)}
      className={props.hero === props.selectedHero ? 'selected' : ''}><div className="name">
          {props.hero.name}
        </div></div> 

        </div>
        </div>

      
   
  
  );
};

export default ToDo;
