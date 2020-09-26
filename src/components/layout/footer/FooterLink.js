import React from 'react';
import { Link } from 'react-router-dom';

function FooterLink({ link }) {
    return (
        <li className="lh-condensed mb-3">
            <Link to={link.slug} className="link-gray">
                {link.name}
            </Link>
        </li>
    );
}

export default FooterLink;