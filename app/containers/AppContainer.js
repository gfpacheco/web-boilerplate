import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as HelloActions from '../actions/hello';

function mapStateToProps(state) {
  return {
    hello: state.hello,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HelloActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
