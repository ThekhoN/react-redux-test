import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuotesAsyncActionCreator} from '../../actions/actionCreators';

class QuoteComponent extends Component {
  componentDidMount () {
    this.props.handleGetQuotes();
  }
  render () {
    const {quotes} = this.props;
    return (
      <div className='quote-component'>
        <h3>Quote Component</h3>
        <ul>
          {quotes.map((quote) => <li key={quote.id}>{quote.quote}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.data,
    status: state.quotes.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetQuotes: () => {
      dispatch(getQuotesAsyncActionCreator());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);
