import React from 'react';

import Card from '../Card/Card';

export default props => {
    return (
        <Card title="Média dos números" green>
            <div className="Intervalo">
                <span>
                    <span>Resultado: </span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    )
}