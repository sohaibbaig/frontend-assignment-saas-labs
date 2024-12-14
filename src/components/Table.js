import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({data}) => {
    if (data.length === 0) {
        return null;
    }
    console.log(data);
    return (
        <div className="table">
            <TableHead />
            {data.map((item) => {
                return <TableBody key={item['s.no']} item={item} />
            })}
        </div>
    )
}

export default Table;