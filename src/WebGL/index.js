import React, { useEffect } from 'react';
import init from './Init';

export default function WebGL() {

    useEffect(() => {
        init('webgl');
    }, [])

    return (
        <div>
            <canvas id="webgl" width="400" height="400" style={{ border: '1px solid black'}}></canvas>
        </div>
    );
}

// export default class WebGL extends React.Component {

//     componentDidMount(){
//         init('webgl');
//     }

//     render(){
//         return <canvas id="webgl" width="400" height="400" style={{ border: '1px solid black'}}></canvas>
//     }
// }
