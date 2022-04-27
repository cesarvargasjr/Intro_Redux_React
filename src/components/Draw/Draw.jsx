import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Draw = props => {

    const { min, max } = props
    const sorteio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um número" purple>
            <div className="Interval">
                <span>
                    <span>Resultado: </span>
                    <strong>{sorteio}</strong>
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

export default connect(mapStateToProps)(Draw)
