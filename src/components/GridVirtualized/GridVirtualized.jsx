import React, { memo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, Grid } from 'react-virtualized';

const GridVirtualized = memo(props => {
    const [list, setList] = useState([]);
    const area = { width: 0, height: 0 };
    function formatList(pList) {}

    function processList(pList) {
        const xList = formatList(pList);
    }

    function cellRenderer({ columnIndex, key, rowIndex, style }) {
        console.log(area);
        count.current = count.current + 1;
        //const xItem = props.list[count.current];

        return (
            <li key={key} style={style}>
                <div className={'cell'}>T</div>
            </li>
        );
    }

    const xRowCount = props.list.length;
    console.log(xRowCount);

    return (
        <AutoSizer>
            {({ width, height }) => {
                area = { width, height };

                <Grid
                    cellRenderer={cellRenderer}
                    columnCount={Math.round(width / 25)}
                    columnWidth={25}
                    height={height}
                    rowCount={xRowCount}
                    rowHeight={25}
                    width={width}
                />;
            }}
        </AutoSizer>
    );
});

GridVirtualized.propTypes = {};

export default GridVirtualized;
