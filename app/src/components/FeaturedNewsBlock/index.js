import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';

const FeaturedArticle = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card mb-6 mb-lg-0 shadow-light-lg">
                <NavLink className="card-img-top" to={props.url}>
                    <Image className="card-img-top" field={props.newsImage.jss} style={{height:200}} />
                </NavLink>
                <div className="position-relative">
                    <div className="shape shape-fluid-x shape-bottom svg-shim text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
                    </div>
                </div>
                <NavLink className="card-body" to={props.url}>
                    <Text tag="h3" field={props.newsTitle.jss} />
                    <Text tag="p" className="mb-0 text-muted" field={props.newsDescription.jss} />
                </NavLink>
            </div>
        </div>
    );
}

const FeaturedNewsBlock = ({ fields: { data: { item }} }) => {
    const featuredNews = (item.featuredNews && item.featuredNews.targetItems) || [];
    const newsBlocks = featuredNews.map((article, index) => (
        <FeaturedArticle
            key={`${article.id}_${index}`}
            {...article} 
        />
    ));
    return (
        <section className="pt-8">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Text tag="h2" className="mb-1" field={item.blockTitle.jss} />
                        <Text tag="p" className="mb-3 text-muted" field={item.blockDescription.jss} />
                    </div>
                </div>
                <div className="row">
                    {newsBlocks}
                </div>
            </div>
        </section>
    );
}
export default FeaturedNewsBlock;
