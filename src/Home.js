import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

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
                    {isLoading && <div>Loading...</div>}
                    { error && <div>{error} </div> }
                { blogs && <BlogList blogs={blogs} title='All Posts' /> }
 
                    <div className="recent-content">
                        <div className="card">
                            
                        </div>
                    </div>
                </div>
            </section>

        ]
     );
}
export default Home;

