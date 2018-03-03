import { connect } from 'react-redux';
import WeatherList from './weatherList';

function mapStateToProps(state) {

  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);