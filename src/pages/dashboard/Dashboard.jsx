import React from 'react';
import Chart from 'react-apexcharts'
import DashboardCard from '../../components/dashboard-card/DashboardCard';
import DashboardNews from '../../components/dashboard-news/DashboardNews';
import RecentSalesTable from '../../components/dashboard-tables/RecentSalesTable';
import TopSellingTable from '../../components/dashboard-tables/TopSellingTable';
import RecentAcitivity from '../../components/dashboard-tables/RecentAcitivity';
const reportsChart = {
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
    },
    series: [{
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 82, 56],
    }, {
        name: 'Revenue',
        data: [11, 32, 45, 32, 34, 52, 41]
    }, {
        name: 'Customers',
        data: [15, 11, 32, 18, 9, 24, 11]
    }],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    markers: {
        size: 4
    },
    colors: ['#4154f1', '#2eca6a', '#ff771d'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.4,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};
const Dashboard = () => {
    return (
        <div className='main'>
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <div className="row">

                    <div className="col-lg-8">
                        <div className="row">
                            <DashboardCard
                                title='Onumler'
                                icon='box-seam'
                                type='customers'
                                count='145'
                                percent='12%'
                            />
                            <DashboardCard
                                title='Kategoriyalar'
                                icon='list-nested'
                                type='revenue'
                                count='$3,264'
                                percent='8%'
                            />
                            <DashboardCard
                                title='Sargytlar'
                                icon='truck'
                                type='delivery'
                                count='$3,264'
                                percent='8%'
                            />
                            <DashboardCard
                                title='Revenue'
                                icon='currency-dollar'
                                type='sales'
                                count='$3,264'
                                percent='8%'
                            />

                            <div className="col-12">
                                <div className="card">

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
                                        <h5 className="card-title">Reports <span>/Today</span></h5>

                                        <div id="reportsChart"></div>
                                        <Chart
                                            options={reportsChart.options}
                                            series={reportsChart.series}
                                            type='area'
                                            height='100%'
                                        />

                                    </div>

                                </div>
                            </div>
                            <RecentSalesTable />
                            <TopSellingTable />

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <RecentAcitivity />
                        <DashboardNews />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Dashboard;
