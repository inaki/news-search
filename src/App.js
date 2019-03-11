import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from './actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SideBar from './components/SideBar';
import Loading from './components/Loading';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: null
        }
    }
    
    componentDidMount() {
        this.props.fetchArticles('wsj.com');
    }
    
    render() {
        const { newsData } = this.props;

        return (
            <CssBaseline>
                <MuiThemeProvider theme={theme}>
                <div>
                    <Header />
                    <SideBar />
                    <NewsList />
                    { !newsData.articles.length && <Loading />}
                </div>
                </MuiThemeProvider>
            </CssBaseline>
            );
        }
    }

const mapStateToProps = state => {
    return {
        newsData: state.newsData
    }
}

export default connect(mapStateToProps, {
    fetchArticles
})(App);
