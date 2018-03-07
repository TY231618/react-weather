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
        return (
          <li className="list-group-item">{ a.display_title }: { a.summary_short }</li>
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

          <ul className="list-group">
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