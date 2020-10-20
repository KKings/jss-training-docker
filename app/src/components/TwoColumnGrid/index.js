import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const TwoColumnGrid = ({ rendering }) => {
    return (
        <section class="py-5 py-md-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <Placeholder name='col-1' rendering={rendering} />
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <Placeholder name='col-2' rendering={rendering} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TwoColumnGrid;