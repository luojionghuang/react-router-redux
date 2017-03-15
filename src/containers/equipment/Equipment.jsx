import React from 'react';
import { connect } from 'react-redux';
import { equipment } from '../../actions';
import { Link } from 'react-router';

var Equipment = React.createClass({
    render() {
        const { count, equipment } = this.props;
        return (
        <div>
            {count}
            <button onClick={equipment}>+1</button>
            <Link to={'/home'} activeStyle={{color: 'red'}}>home</Link>
        </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        count: state.equipment.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        equipment: () => dispatch(equipment())
    };
}

Equipment = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Equipment);

module.exports = {
    Equipment
};