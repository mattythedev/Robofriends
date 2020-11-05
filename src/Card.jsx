import React from 'react';

class Card extends React.Component {
  render() {
    return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src='https://robohash.org/test?200x200' alt='robots'/>
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
