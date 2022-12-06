import { useState } from "react";

const Home = () => {
const [blogs,setBlog]=useState([
    {
        id:1,
        title:'Blog Post One',
        author: 'Nathaniel',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque!',

    },
    {
        id:2,
        title:'Blog Post Two',
        author: 'Nosa',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque!',

    },
    {
        id:3,
        title:'Blog Post One',
        author: 'Ncode',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque!',

    },
]);

    return ( 
            [
                <section id="home" className="home">
                <div className="container">
                    <h1>WELCOME TO NBlog</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Fuga soluta cum debitis nisi, vero ipsum excepturi architecto est quod adipisci reiciendis, laudantium illum magni!</p>
                    <button>Read More</button>
                </div>
            </section>,

            <section id="blog-list" className="blog-list">
                    <h3>Blog Posts</h3>
                <div className="container">
                    <div className="blog-content">
                        {
                    
                            blogs.map((blog)=>(
                                <div className="card" key={blog.id}>
                                    <h4>{blog.title}</h4>
                                    <p>By: {blog.author}</p>
                                    <p>{blog.body}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="recent-content">
                        <div className="card"></div>
                    </div>
                </div>
            </section>

        ]
     );
}
export default Home;

