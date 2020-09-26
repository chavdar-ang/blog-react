import React from 'react';
import { Link } from 'react-router-dom';
import FooterLinkColumn from './FooterLinkColumn';

const links = [
    {
        title: "Products",
        links: [
            {
                name: "Features",
                slug: "features",
            },
            {
                name: "Security",
                slug: "security",
            },
            {
                name: "Enterprise",
                slug: "enterprise",
            },
            {
                name: "Customer stories",
                slug: "customer-stories",
            },
            {
                name: "Pricing",
                slug: "pricing",
            },
            {
                name: "Resources",
                slug: "resources",
            }
        ]
    },
    {
        title: "Platform",
        links: [
            {
                name: "Developer API",
                slug: "developer-api",
            },
            {
                name: "Partners",
                slug: "partners",
            },
            {
                name: "Atom",
                slug: "atom",
            },
            {
                name: "Electron",
                slug: "electron",
            }
        ]
    },
    {
        title: "Support",
        links: [
            {
                name: "Help",
                slug: "help",
            },
            {
                name: "Community Forum",
                slug: "community-forum",
            },
            {
                name: "Training",
                slug: "training",
            },
            {
                name: "Status",
                slug: "status",
            },
            {
                name: "Contact",
                slug: "contact",
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                name: "About",
                slug: "About",
            },
            {
                name: "Blog",
                slug: "Blog",
            },
            {
                name: "Careers",
                slug: "Careers",
            },
            {
                name: "Press",
                slug: "Press",
            },
            {
                name: "Shop",
                slug: "Shop",
            }
        ]
    }
]

function Footer() {
    return (
        <footer className="mt-6">

            <div className="container-lg p-responsive">
                <div className="d-flex flex-wrap py-5 mb-5">
                    <div className="col-12 col-lg-4 mb-5">
                        <Link to="#" className="text-gray-dark">
                            A blog (logo)
                        </Link>
                    </div>
                    {
                        links.map(column => {
                            return (
                                <FooterLinkColumn column={column} key={column.title}/>
                            );
                        })
                    }
                </div>
            </div>
            <div className="bg-gray-light">
                <div className="container-lg p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
                    <ul className="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra site-footer__social-list">
                        <li className="mr-3">
                            <a href="https://tweeter.com">
                                <span className="screen-reader-text">Twitter link</span>
                            </a>
                        </li>
                        <li className="mr-3">
                            <a href="https://facebook.com">
                                <span className="screen-reader-text">Facebook link</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="list-style-none d-flex text-gray">
                        <li className="mr-3">
                            © 2020 Blog, Inc.
                        </li>
                        <li className="mr-3">
                            <Link to="/site/terms" className="link-gray">
                                Terms
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link to="/site/privacy" className="link-gray">
                                Privacy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Footer;