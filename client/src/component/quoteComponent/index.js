import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuotesAsyncActionCreator} from '../../actions/actionCreators';

const url = 'https://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes';

class QuoteComponent extends Component {
  componentDidMount(){
    this.props.handleGetQuotes(url);
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
    handleGetQuotes: (url) => {
      dispatch(getQuotesAsyncActionCreator(url));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);
