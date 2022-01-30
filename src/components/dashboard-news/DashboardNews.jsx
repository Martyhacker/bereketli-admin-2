import React from 'react';
import imgNews1 from '../../assets/img/news-1.jpg'
import imgNews2 from '../../assets/img/news-2.jpg'
import imgNews3 from '../../assets/img/news-3.jpg'
import imgNews4 from '../../assets/img/news-4.jpg'
import imgNews5 from '../../assets/img/news-5.jpg'
const newsList = [
    {
        title: "Nihil blanditiis at in nihil autem",
        subtitle: "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...",
        image: imgNews1
    },
    {
        title: "Quidem autem et impedit",
        subtitle: "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...",
        image: imgNews2
    },
    {
        title: "Id quia et et ut maxime similique occaecati ut",
        subtitle: "Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...",
        image: imgNews3
    },
    {
        title: "Laborum corporis quo dara net para",
        subtitle: "Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...",
        image: imgNews4
    },
    {
        title: "Et dolores corrupti quae illo quod dolor",
        subtitle: "Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...",
        image: imgNews5
    }
]
const NewsBlock = props => {
    return (<div className="post-item clearfix">
        <img src={props.image} alt="" />
        <h4><a href="#">{props.title}</a></h4>
        <p>{props.subtitle}</p>
    </div>)
}
const DashboardNews = () => {
    return (
        <div className='card'>
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
                <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>
                <div className="news">
                    {newsList.map(e => {
                        return <NewsBlock
                            image={e.image}
                            title={e.title}
                            subtitle={e.subtitle}
                        />
                    })}
                </div>
            </div>
        </div>

    );
};

export default DashboardNews;
