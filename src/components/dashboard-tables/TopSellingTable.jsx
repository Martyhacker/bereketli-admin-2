import React from 'react';
import imgProduct1 from '../../assets/img/product-1.jpg'
import imgProduct2 from '../../assets/img/product-2.jpg'
import imgProduct3 from '../../assets/img/product-3.jpg'
import imgProduct4 from '../../assets/img/product-4.jpg'
import imgProduct5 from '../../assets/img/product-5.jpg'
const topSellingData = [
    {
        name: "Ut inventore ipsa voluptas nulla",
        price: "$64",
        sold:"124",
        revenue:"$5,828",
        image:imgProduct1
    },
    {
        name: "Exercitationem similique doloremque",
        price: "$46",
        sold:"98",
        revenue:"$4,508",
        image:imgProduct2
    },
    {
        name: "Doloribus nisi exercitationem",
        price: "$59",
        sold:"74",
        revenue:"$4,366",
        image:imgProduct3
    },
    {
        name: "Officiis quaerat sint rerum error",
        price: "$32",
        sold:"64",
        revenue:"$2,016",
        image:imgProduct4
    },
    {
        name: "Sit unde debitis delectus repellendus",
        price: "$79",
        sold:"41",
        revenue:"$3,239",
        image:imgProduct5
    },
]
const TableRow = props => {
    return (
        <tr>
            <th scope="row"><a href="#"><img src={props.image} alt="" /></a></th>
            <td><a href="#" className="text-primary fw-bold">{props.name}</a></td>
            <td>{props.price}</td>
            <td className="fw-bold">{props.sold}</td>
            <td>{props.revenue}</td>
        </tr>
    );
}
const TopSellingTable = () => {
    return (
        <div className="col-12">
            <div className="card top-selling">

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
                <div className="card-body pb-0">
                    <h5 className="card-title">Top Selling <span>| Today</span></h5>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Preview</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Sold</th>
                                <th scope="col">Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                topSellingData.map((e)=>
                                <TableRow
                                    name={e.name}
                                    price={e.price}
                                    sold={e.sold}
                                    revenue={e.revenue}
                                    image={e.image}
                                />
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default TopSellingTable;
