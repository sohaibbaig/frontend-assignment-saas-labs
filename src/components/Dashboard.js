import React, { useEffect, useState } from "react";
import Table from "./Table";
import getRequest from '../services/api';
import '../stylesheets/dashboard.scss';

const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getRequest("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json")
        .then((result) => setData(result))
        .catch((error) => setData([]));
    }, []);


    return (
        <div className="dashboard">
            <Table data={data} />
        </div>
    )
}

export default Dashboard;