import React from 'react';
const activityList = [
    {
        time: "32 min",
        title: "Quia quae rerum explicabo officiis beatae",
        type: "success"
    },
    {
        time: "56 min",
        title: "Voluptatem blanditiis blanditiis eveniet",
        type: "danger"
    },
    {
        time: "2 hrs",
        title: "Voluptates corrupti molestias voluptatem",
        type: "primary"
    },
    {
        time: "1 day",
        title: "Tempore autem saepe occaecati voluptatem tempore",
        type: "info"
    },
    {
        time: "2 days",
        title: "Est sit eum reiciendis exercitationem",
        type: "warning"
    },
    {
        time: "4 weeks",
        title: "Dicta dolorem harum nulla eius. Ut quidem quidem sit quas",
        type: "muted"
    }
]
const AcitivityBlock = props => {
    return (
        <div className="activity-item d-flex">
            <div className="activite-label">{props.time}</div>
            <i className={`bi bi-circle-fill activity-badge text-${props.type} align-self-start`}></i>
            <div className="activity-content">{props.title}</div>
        </div>
    );
}
const RecentAcitivity = () => {
    return (
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
                <h5 className="card-title">Recent Activity <span>| Today</span></h5>
                <div className="activity">
                    {
                        activityList.map((e) => {
                            return <AcitivityBlock
                                time={e.time}
                                title={e.title}
                                type={e.type}
                            />
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default RecentAcitivity;
