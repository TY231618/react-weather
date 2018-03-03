import React from 'react';

export default class RandomContent extends React.Component {

  render() {

    return (
      <p>Hello my name is { this.props.details.name }, I work as a { this.props.details.occupation } and I am aged { this.props.details.age }</p>
    )
  }
}

