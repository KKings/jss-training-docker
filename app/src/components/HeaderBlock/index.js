import React, { useContext } from 'react';
import { RichText, Image, SitecoreContextReactContext } from '@sitecore-jss/sitecore-jss-react';
import RightArrow from '../../global/right-arrow'
import RoutableSitecoreLink from '../../global/router-link';

const HeaderBlock = ({ fields }) => {
    const sitecoreContextFactory = useContext(SitecoreContextReactContext);
    const sitecoreContext = sitecoreContextFactory.getSitecoreContext();

    return (
        <section className="pt-4 pt-md-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-6 order-md-1">
                        <Image className="img-fluid mb-5 mb-md-0" field={fields.headerImage} />
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <RichText tag="h1" className="display-6 text-center text-md-left" field={fields.headerTitle} />
                        <RichText tag="div" className="lead text-center text-md-left text-muted mb-3" field={fields.headerDescription} />
                        <div className="text-center text-md-left pt-4">
                            { sitecoreContext.pageEditing ? (
                                <RoutableSitecoreLink field={fields.headerLink} className="btn btn-lg btn-primary hover-top-shadow mr-3" />
                            ) : (
                                <RoutableSitecoreLink field={fields.headerLink} className="btn btn-lg btn-primary hover-top-shadow mr-3" style={{color: 'white'}}>
                                    {fields.headerLink.value && fields.headerLink.value.text}
                                    <RightArrow />
                                </RoutableSitecoreLink>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderBlock;