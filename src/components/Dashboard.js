import React, { useEffect, useState } from "react";
import Table from "./Table";
import getRequest from '../services/api';
import '../stylesheets/dashboard.scss';
import Pagination from "./Pagination";

const Dashboard = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        getRequest("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json")
        .then((result) => setData(result))
        .catch((error) => setData([]));
    }, []);


    return (
        <div className="dashboard">
            {data.length === 0 ? 
                <div>Loading...</div> : 
                <>
                    <Table data={currentItems} />
                    <Pagination totalItems={data.length} itemsPerPage={5} onPageChange={(page) => setCurrentPage(page)} />
                </>
            }
        </div>
    )
}

export default Dashboard;