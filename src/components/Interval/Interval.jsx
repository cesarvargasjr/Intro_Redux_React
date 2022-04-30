import './Interval.css';
import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { alterNumberMin, alterNumberMax } from '../../store/actions/numbers';
import { alterName } from '../../store/actions/names';

const Interval = props => {

    const { min, max, name } = props

    return (
        <>
            <Card title="Intervalo dos números" newBlue>
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
            <Card title="Nomes" newBlue>
                <div className="Interval">
                    <span>
                        <strong>Nome:</strong>
                        <input type="text" value={name} onChange={e => props.alterNewName(e.target.value)} />
                    </span>
                </div>
            </Card>
        </>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
        name: state.names.name,
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
        },
        alterNewName(newName) {
            // ACTION CREATOR RETORNANDO UMA ACTION
            const action = alterName(newName)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)
