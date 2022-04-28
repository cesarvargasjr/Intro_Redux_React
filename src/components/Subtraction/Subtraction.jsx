import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Subtraction = props => {

    const { min, max } = props

    return (
        <Card title="Subtração dos números" orange>
            <div className="Interval">
                <span>
                    <span>Resultado: </span>
                    <strong>{max - min}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(Subtraction)
