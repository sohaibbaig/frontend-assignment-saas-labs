import React from "react";

const TableHead = () => {
    return (
        <div className="table-row header" role="row">
            <div className="table-cell" role="columnheader">S.No.</div>
            <div className="table-cell" role="columnheader">Percentage funded</div>
            <div className="table-cell" role="columnheader">Amount pledged</div>
        </div>
    )
}

export default TableHead;