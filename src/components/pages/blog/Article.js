import React from 'react';
import { Link } from 'react-router-dom';

function Article() {
    return (
        <article className="post-item d-flex flex-column flex-md-row mb-8 px-sm-0">

            <div className="col-12 col-md-3">
                <Link to="#">
                    <time datetime="2020-09-25">
                        September 25, 2020
                    </time>
                </Link>
            </div>

            <div class="col-12 col-lg-7">

                <ul className="d-flex flex-row flex-wrap mb-3">
                    <li><Link to="#">Community</Link></li>
                    <li><Link to="#">Marketplace</Link></li>
                    <li><Link to="#">Open source</Link></li>
                </ul>

                <h4 className="f3 mb-4">
                    <Link to="#">
                        GitHub Action Hero · James Ives and “GitHub Pages Deploy”
                    </Link>
                </h4>

                <div class="mb-3">
                    <p>
                        GitHub Actions gives you the power to automate your workflow. Connect with the tools you
                        know and love. Have more freedom to innovate and be creative. Deploy to any cloud, build
                        containers, automate messages, and
                    </p>
                </div>

                <Link to="#" className="d-inline-flex flex-row flex-items-center">
                    <div className="mr-3">
                        <img alt="Michelle Mannering" src="/img/avatar.jpg" className="avatar avatar-35 photo avatar-default" height="35" width="35" />
                    </div>
                    <p class="f5 m-0">
                        Michelle Mannering
                    </p>
                </Link>
            </div>
        </article>
    );
}

export default Article;