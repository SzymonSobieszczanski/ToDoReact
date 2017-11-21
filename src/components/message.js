import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-transition-group'

const message = props => {
    console.log(props);
<div>

    <label><strong>{props.nickname}:</strong></label> <label>{props.message}</label>
</div>



}

export default message;