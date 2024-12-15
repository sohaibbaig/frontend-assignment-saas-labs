import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({data}) => {
    if (data.length === 0) {
        return null;
    }
    return (
        <div className="table" role="table">
            <TableHead />
            {data.map((item) => {
                return <TableBody key={item['s.no']} item={item} />
            })}
        </div>
    )
}

export default Table;