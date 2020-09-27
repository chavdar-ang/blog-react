import React from 'react';
import { Link } from 'react-router-dom';

function Related() {
    return (
        <section className="px-3 py-6 py-md-9 bg-gray-light">

            <div className="container-xl">
                <strong className="section-label f3 alt-mono-font text-gray d-inline-block mb-4 underline-dash">
                    Related posts
                </strong>
            </div>

            <div className="container-xl d-flex flex-column flex-md-row mt-4">

                <div className="related-posts__post col-12 col-md-4 px-3 pl-md-0 pr-md-5">
                    <article className="post-item d-flex flex-column flex-lg-row mb-8 px-sm-0">

                        <div className="post-item__content col-12 col-lg-6">

                            <div className="post__meta d-flex flex-column flex-lg-row flex-lg-items-center f4">
                                <p className="post__date m-0 alt-mono-font">
                                    <time dateTime="2020-09-25">
                                        September 25, 2020
                                    </time>
                                </p>

                                <div className="post__categories flex-auto">
                                    <Link to="#" className="alt-mono-font">Community</Link>
                                </div>
                            </div>

                            <h4 className="post-item__title f3 mb-4">
                                <Link to="https://github.blog/2020-09-25-github-action-hero-james-ives-and-github-pages-deploy/">
                                    GitHub Action Hero · James Ives and “GitHub Pages Deploy”
                                </Link>
                            </h4>

                            <div className="post-item__excerpt mb-3">
                                <p>GitHub Actions gives you the power to automate your workflow. Connect with the tools you know and love. Have more freedom to innovate and be creative. Deploy to any cloud, build containers, automate messages, and</p>
                            </div>

                            <Link to="https://github.blog/author/mishmanners/" className="author-block d-inline-flex flex-row flex-items-center">
                                <div className="author-block__pic mr-3">
                                    <img alt="Michelle Mannering" src="/img/avatar.jpg" className="avatar avatar-35 photo avatar-default" height="35" width="35" />
                                </div>
                                <p className="hero-post__author-name f5 m-0">
                                    Michelle Mannering
                                </p>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </section >
    );
}

export default Related;