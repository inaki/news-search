import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from './actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SideBar from './components/SideBar';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    const { articles } = this.props;
    return (
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <div>
            <Header />
            <NewsList data={articles}/>
            <SideBar />
          </div>
        </MuiThemeProvider>
      </CssBaseline>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, {
  fetchArticles
})(App);
