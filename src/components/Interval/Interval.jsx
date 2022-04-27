import './Interval.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { alterNumberMin, alterNumberMax } from '../../store/actions/numbers';

const Interval = props => {

    const { min, max } = props

    return (
        <Card title="Intervalo dos números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterMax(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        alterMin(newNumber) {
            // ACTION CREATOR RETORNANDO UMA ACTION
            const action = alterNumberMin(newNumber)
            dispatch(action)
        },
        alterMax(newNumber) {
            // ACTION CREATOR RETORNANDO UMA ACTION
            const action = alterNumberMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)
