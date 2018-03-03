import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './searchBar';
import { fetchWeather } from '../../actions/index';

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);