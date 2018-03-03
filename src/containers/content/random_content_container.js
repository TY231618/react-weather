import { connect } from 'react-redux';
import RandomContent from './randomContent';

function mapStateToProps(state) {

  return {
    details: state.details
  }
};

export default connect(mapStateToProps)(RandomContent);