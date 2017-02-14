import React from 'react';
import { connect } from 'react-redux';
import { home } from '../../actions';
import { Link } from 'react-router';

var Home = React.createClass({
    render() {
        const { count, home } = this.props;
        return (
            <div>
                {count}
                <button onClick={home}>-1</button>
                <Link to={'/equipment'} activeStyle={{color: 'red'}}>equipment</Link>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        count: state.home.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        home: () => home(dispatch)
    };
}

Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

module.exports = {
    Home
};