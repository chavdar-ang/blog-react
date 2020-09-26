import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

function Article({ item }) {
    return (
        <article className="post-item d-flex flex-column flex-md-row mb-8 px-sm-0">

            <div className="col-12 col-md-3">
                <Link to="#">
                    <time dateTime={item.published_at}>
                        { dayjs(item.published_at).format('MMMM DD, YYYY') }
                    </time>
                </Link>
            </div>

            <div className="col-12 col-lg-7">

                <ul className="d-flex flex-row flex-wrap mb-3">
                    <li>
                        {
                            item.categories.map(cat => {
                                return <Link to={'/category/' + cat.slug} key={cat.slug}>{cat.name}</Link>
                            })
                        }
                    </li>
                </ul>

                <h4 className="f3 mb-4">
                    <Link to="#">
                        { item.title }
                    </Link>
                </h4>

                <div className="mb-3">
                    <p>
                        {item.body}
                    </p>
                </div>

                <Link to="#" className="d-inline-flex flex-row flex-items-center">
                    <div className="mr-3">
                        <img alt="Michelle Mannering" src="/img/avatar.jpg" className="avatar avatar-35 photo avatar-default" height="35" width="35" />
                    </div>
                    <p className="f5 m-0">
                        { item.author.name }
                    </p>
                </Link>
            </div>
        </article>
    );
}

export default Article;