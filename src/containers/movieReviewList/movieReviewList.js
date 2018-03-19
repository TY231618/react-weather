import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieReviews } from '../../actions/index';
import _ from 'lodash';

class MovieReviewList extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isHidden: true
    };
  }

  renderMovieReviews() {

    return _.map(this.props.reviews, (review) => {
      return review.results.map((a) => {
        console.log(a)

        return (
          <li className="list-group-item">
            <strong>{ a.display_title }</strong>: { a.summary_short }
            <img src={a.multimedia.src} />
          </li>
        )
      });
    });
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {

    return (
      <div>
        Movie reviews
        <div>
          <button className="btn btn-success" onClick={this.toggleHidden.bind(this)} >
            Click to show reviews
          </button>

          <ul className="list-group list-group-flush">
            { !this.state.isHidden && this.renderMovieReviews() }
          </ul>
        </div>
      </div>
    )
  }
  
  componentWillMount() {
    this.props.fetchMovieReviews()
  }
}

function mapStateToProps(state) {
  // return bindActionCreators({fetchMovieReviews: fetchMovieReviews}, dispatch);
  return {
    reviews: state.reviews
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchMovieReviews: fetchMovieReviews}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieReviewList);