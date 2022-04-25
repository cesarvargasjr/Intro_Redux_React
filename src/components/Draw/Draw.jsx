import React from 'react';

import Card from '../Card/Card';

export default props => {
    return (
        <Card title="Sorteio de um números" purple>
            <div className="Interval">
                <span>
                    <span>Resultado: </span>
                    <strong>8</strong>
                </span>
            </div>
        </Card>
    )
}