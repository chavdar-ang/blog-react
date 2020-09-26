import React from 'react';
import FooterLink from './FooterLink';

function FooterLinkColumn({ column }) {
    return (
        <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4">
            <h4 className="mb-3 text-mono text-gray-light text-normal">
                {column.title}
            </h4>
            <ul className="list-style-none text-gray f5">
                {
                    column.links.map(link => {
                        return <FooterLink link={link} key={link.slug} />
                    })
                }
            </ul>
        </div>
    );
}

export default FooterLinkColumn;