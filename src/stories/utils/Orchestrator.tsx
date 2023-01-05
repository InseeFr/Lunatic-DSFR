import React, { FC } from 'react'; 
// import {lunatic} from '@inseefr/lunatic';
// const lunatic = require('@inseefr/lunatic')

interface OrchestratorProps {
    source: {maxPage: string},
    // data: object
}

const Orchestrator: FC<OrchestratorProps> = ({
    source, 
    // data
}) => {
    // console.log(lunatic.useLunatic(source, data, {}))
    return (
        <div className="container">
            <div className="components">
                hi hi {source.maxPage}
            </div>
        </div>
    )
}

export default Orchestrator;