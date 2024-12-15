import React from "react";

const TableBody = ({item}) => {
    const serial = item['s.no'];
    const percentage = item['percentage.funded'];
    const amount = item['amt.pledged'];

    return (
        <div className="table-row">
            <div className="table-cell" role="cell">{serial}</div>
            <div className="table-cell" role="cell">{percentage}</div>
            <div className="table-cell" role="cell">{amount}</div>
        </div>
    )
}

export default TableBody;
