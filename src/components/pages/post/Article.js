import React from 'react';
import { Link } from 'react-router-dom';
import Feature from './Feature';
import dayjs from 'dayjs';

function Article({ item }) {
    return (
        <article className="col-12">
            <Feature />

            <div className="post__meta d-flex flex-column flex-md-row flex-md-items-center my-3 col-12">
                <p className="post__date m-0 alt-mono-font f5">
                    <time dateTime="2020-09-24">
                        {dayjs("2020-09-24").format('MMMM DD, YYYY')}
                    </time>
                </p>
                <div className="col-12 col-md-6 flex-auto d-flex flex-row flex-wrap alt-mono-font">
                    <li>
                        <Link to={'/category/comunity/'}>
                            Community
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/events/'}>
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/community/open-source/'}>
                            Open source
                        </Link>
                    </li>
                </div>
            </div>

            <h1 className="my-2 f00-light lh-condensed">
                GitHub India Virtual Meetup – Open Source &amp; Hacktoberfest
            </h1>

            <Link to="/author/mvkaran/" className="d-inline-flex flex-row flex-items-center">
                <div className="mr-3">
                    <img alt="User avatar title" src="/img/avatar.jpg" className="avatar avatar-35 photo avatar-default" height="35" width="35" />
                </div>
                <p className="f5 m-0">
                    MV Karan
                </p>
            </Link>

            <div className="post__content markdown-body col-12 col-md-10 mb-2 mb-md-4">

                <p>The developer community in India is thriving and growing. There’s lots of developers, open source maintainers, and contributors. Here at <a href="https://github.blog/2020-02-12-announcing-github-india/" target="_blank" rel="noopener noreferrer">GitHub India</a>, we’re excited to announce our next Virtual Meetup talking about Open Source &amp; Hacktoberfest. The meetup will happen on Tuesday, October 6th, 6.30 PM IST to 8 PM IST.</p>
                <p>Come learn about contributing to Open Source, growing your contributors community and participating in Hacktoberfest!</p>
                <p>MV Karan, the Developer Relations for GitHub India will be your event host. During the event, he’ll walk us through some of the newest GitHub features, and how they can help productivity in your work.</p>
                <h2>
                    What to expect at the GitHub India meetup
                </h2>
                <blockquote>
                    <p>
                        We have some amazing special guests joining us for the India Virtual Meetup. Here’s the schedule:
                    </p>
                </blockquote>
                <p>We’ll dedicate some time for discussions and networking at the end of the event. This is a great opportunity to connect with Hubbers, speakers, and your peers from the Indian developer &amp; Open Source community.</p>
                <p>We look forward to hosting you at the Meetup! Don’t miss out on our first GitHub India Meetup. <a href="https://github.co/meetup-india" target="_blank" rel="noopener noreferrer">Please RSVP here</a> for event updates, links, and more information.</p>

            </div>

            <div className="post__social-share pt-5 pt-md-0">
                <div className="social-links">

                    <strong className="section-label f3 alt-mono-font text-gray d-inline-block mb-2 mb-lg-4 underline-dash">
                        Share
                    </strong>

                    <ul className="social-links__list d-flex flex-row flex-lg-column">
                        <li className="social-links__item">
                            <Link to="https://facebook.com">
                                <span className="f5">
                                    Facebook
                                </span>
                            </Link>
                            <Link to="https://twitter.com">
                                <span className="f5">
                                    Twitter
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </article >
    );
}

export default Article;