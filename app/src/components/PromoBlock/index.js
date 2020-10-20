import React from 'react';
import { Text, isExperienceEditorActive } from '@sitecore-jss/sitecore-jss-react';
import RightArrow from '../../global/right-arrow';
import RoutableSitecoreLink from '../../global/router-link';

const Promo = ({ fields }) => {
    return (
        <div className="col-12 col-md-4">
            <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                <div className="card-body">
                    <Text 
                        tag='span'
                        className='badge badge-pill badge-primary-desat badge-float badge-float-outside'
                        field={fields.promoBadgeText}
                    />
                    <Text
                        tag='h4'
                        className='font-weight-bold'
                        field={fields.promoTitle}
                    />
                    <Text
                        tag='p'
                        className='text-muted'
                        field={fields.promoDescription}
                    />
                    { isExperienceEditorActive() ? (
                        <RoutableSitecoreLink 
                            className='font-size-sm font-weight-bold text-decoration-none'
                            field={fields.promoLink} /> 
                    ) : (
                        <RoutableSitecoreLink 
                            className='font-size-sm font-weight-bold text-decoration-none'
                            field={fields.promoLink}
                        >
                            {fields.promoLink.value && fields.promoLink .value.text}
                            <RightArrow />
                        </RoutableSitecoreLink>
                    )}
                </div>
            </div>
        </div>
    );
};

const PromoBlock = ({ fields }) => {
    const promos = fields.promotions || [];
    return (
        <section className="py-5 py-md-5 border-bottom">
            <div className="container">
                <div className="row">
                    {promos.map((promo, index) => (
                        <Promo 
                            key={`${promo.id}_${index}`}
                            {...promo}
                        />
                    ))}
                </div> 
            </div>
      </section>
    );
};

export default PromoBlock;