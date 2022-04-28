import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Name = props => {

    const { name } = props

    return (
        <Card title="Novo Nome" orange>
            <div className="Interval">
                <span>
                    <span>Resultado: </span>
                    <strong>{name}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        name: state.names.name,
    }
}

export default connect(mapStateToProps)(Name)
