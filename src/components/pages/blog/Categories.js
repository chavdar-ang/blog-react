import React from 'react';
import { Link } from 'react-router-dom'

function Categories() {
    return (
        <section className="blog-categories flex">
            <div className="Box hover-grow">
                <Link to="#" className="p-2 d-block">
                    <h4>Company</h4>
                </Link>

                <div className="d-inline-block alt-mono-font p-2">
                    <Link to="#">Policy</Link>,
                    <Link to="#">Remote work</Link>,
                    <Link to="#">Updates</Link>
                </div>
            </div>

            <div className="Box hover-grow">
                <Link to="#" className="p-2 d-block">
                    <h4>Community</h4>
                </Link>

                <div className="d-inline-block alt-mono-font p-2">
                    <Link to="#">Education</Link>,
                    <Link to="#">Events</Link>,
                    <Link to="#">Insights</Link>,
                    <Link to="#">Open source</Link>
                </div>
            </div>
        </section>
    );
}

export default Categories;