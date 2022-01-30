import React from 'react';
const recentSales = [
    {
        id: "#2457",
        customer: "Brandon Jacob",
        product: "At praesentium minu",
        price: "$64",
        status: "Approved",
        statusType: "success"
    },
    {
        id: "#2147",
        customer: "Bridie Kessler",
        product: "Blanditiis dolor omnis similique",
        price: "$47",
        status: "Pending",
        statusType: "warning"
    },
    {
        id: "#2049",
        customer: "Ashleigh Langosh",
        product: "At recusandae consectetur",
        price: "$147",
        status: "Approved",
        statusType: "success"
    },
    {
        id: "#2644",
        customer: "Angus Grady",
        product: "Ut voluptatem id earum et",
        price: "$67",
        status: "Rejected",
        statusType: "danger"
    },
    {
        id: "#2644",
        customer: "Raheem Lehner",
        product: "Sunt similique distinctio",
        price: "$165",
        status: "Approved",
        statusType: "success"
    },
]
const TableRow = props => {
    return (
        <tr>
            <th scope="row">{props.id}<a href="#"></a></th>
            <td>{props.customer}</td>
            <td><a href="#" className="text-primary">{props.product}</a></td>
            <td>{props.price}</td>
            <td><span className={`badge bg-${props.statusType}`}>{props.status}</span></td>
        </tr>
    );
}
const RecentSalesTable = () => {
    return (
        <div className="col-12">
            <div className="card recent-sales">

                <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                    <table className="table table-borderless datatable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentSales.map((e) => {
                                    return <TableRow
                                        id={e.id}
                                        customer={e.customer}
                                        product={e.product}
                                        price={e.price}
                                        status={e.status}
                                        statusType={e.statusType}
                                    />
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default RecentSalesTable;
