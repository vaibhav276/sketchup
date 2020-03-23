import React from 'react';
// import { Container } from 'semantic-ui-react';

export default class GraphTextToJsxCompiler {
    _state = {
        renderOptions: {
            box: {
                minSize: 50,
                roundNess: 5,
                thickness: 2,
                color: 'black',
                fill: 'transparent'
            }
        }
    };

    compile(text) {
        // console.log('Input text', text);
        try {
            const data = this.evaluateGraphTextToJson(text);
            return (
                <svg
                  version="1.1"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {this.boxes(data.boxes)}
                </svg>
            );
        } catch (e) {
            console.log('Parsing error: ' + e);
            return <div>Parsing error: <br />{e.message}</div>;
        }
    }

    evaluateGraphTextToJson(text) {
        return JSON.parse(text);
    }

    boxes = (obj) => {
        let res = [];
        let options = this._state.renderOptions.box;

        obj.forEach ( (e,i) => {
            const key = "box-" + i;
            res.push(
                <rect
                  key={key}
                  x={e.at[0]}
                  y={e.at[1]}
                  rx={options.roundNess}
                  ry={options.roundNess}
                  width={options.minSize}
                  height={options.minSize}
                  stroke={options.color}
                  strokeWidth={options.thickness}
                  fill={options.fill}
                />
            );
        });
        return res;
    }
}
