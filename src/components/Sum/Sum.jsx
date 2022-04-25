import React from 'react';

import Card from '../Card/Card';

export default props => {
    return (
        <Card title="Soma dos números" blue>
            <div className="Interval">
                <span>
                    <span>Resultado: </span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}