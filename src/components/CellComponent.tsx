import React from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell
}

const CellComponent = ({cell}:CellProps) => {
    return (
        <div
            className={['cell', cell.color].join(' ')}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    );
};

export default CellComponent;