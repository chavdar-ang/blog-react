import React from 'react';
import { Link } from 'react-router-dom';
import Article from './Article';
import { useSelector } from 'react-redux'

// const list = [
//     {
//         _id: 1,
//         title: "GitHub Action Hero · James Ives and “GitHub Pages Deploy”",
//         slug: "github-action-hero-james-ives-and-github-pages-deploy",
//         body: "GitHub Actions gives you the power to automate your workflow. Connect with the tools you know and love. Have more freedom to innovate and be creative.",
//         author: {
//             name: "Michelle Mannering",
//             username: "micha",
//             avatar: "avatar.jpg"
//         },
//         categories: [
//             {
//                 name: "Community",
//                 slug: "community"
//             },
//             {
//                 name: "Marketplace",
//                 slug: "marketplace"
//             },
//             {
//                 name: "Open source",
//                 slug: "open-source"
//             }
//         ],
//         published_at: '2020-09-25'
//     },
//     {
//         _id: 2,
//         title: "Introducing the GitHub Stars Program",
//         slug: "introducing-the-github-stars-program",
//         body: "GitHub is home to the world’s largest community of developers who share their code, work together, and build amazing things. But out of those millions of developers on GitHub, there are a few who go above and beyond in helping others in the developer space – not just by maintaining projects but by helping educate, inspire and influence the online and in-person communities in which they live and work.",
//         author: {
//             name: "Anisha Pindoria",
//             username: "nisha",
//             avatar: "avatar.jpg"
//         },
//         categories: [
//             {
//                 name: "Product",
//                 slug: "product"
//             },
//             {
//                 name: "Open source",
//                 slug: "open-source"
//             }
//         ],
//         published_at: '2020-04-12'
//     }
// ];

function ArticleList() {
    const articles = useSelector(state => state.articles.list);

    console.log(articles);
    return (
        <section className="blog-posts">
            <h3>All posts</h3>

            {
                articles.map(item => {
                    return <Article key={item._id} item={item} />
                })
            }

            <Link to="#" className="mb-6 mb-md-2 p-3 btn btn-outline">
                View more posts
            </Link>
        </section>
    );
}

export default ArticleList;