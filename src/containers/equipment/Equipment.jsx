import React from 'react';
import { connect } from 'react-redux';
import { equipment } from '../../actions';

var Equipment = React.createClass({
    getInitialState() {
        return {
            count: 0
        };
    },
    render() {
        const { count, equipment } = this.props;
        return (
        <div>
            {count}
            <button onClick={equipment}>+1</button>
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
        equipment: () => equipment(dispatch)
    };
}

Equipment = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Equipment);

module.exports = {
    Equipment
};