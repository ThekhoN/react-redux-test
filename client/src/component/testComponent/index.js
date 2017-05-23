import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';
import {incrementCountActionCreator, decrementCountActionCreator} from '../../actions/actionCreators';

class TestComponent extends Component {
  render () {
    const {test, count, incrementCount, decrementCount} = this.props;
    return (
      <div className='test-component'>
        <span className='test-text'>This is a Connected Test Component</span>
        <h2>test: <span className='special'>{test.toString()}</span></h2>
        <br />
        <h2>{count}</h2>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.testReducer.test,
    count: state.testReducer.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => {
      dispatch(incrementCountActionCreator(1));
    },
    decrementCount: () => {
      dispatch(decrementCountActionCreator(1));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
