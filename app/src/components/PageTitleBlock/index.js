import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PageTitleBlock = ({ fields }) => {
    return (
        <section className='pt-md-3'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-10 col-lg-9 col-xl-8'>
                        <Text tag='h1' className='display-6 text-center' field={fields.pageTitle} />
                        <Text tag='p' className='lead mb-3 text-center text-muted' field={fields.pageDescription} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleBlock;
