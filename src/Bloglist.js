import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs
    // const title = props.title
    return (
        <div className="blog-content">
            <h5>{title}</h5>
            {
        
                blogs.map((blog)=>(
                    <div className="card" key={blog.id}>
                        <Link to = {`/detail/${blog.id}`}>
                            <h4>{blog.title}</h4>
                            <p>By: {blog.author}</p>
                            <p>{blog.body}</p>
                        </Link>
                        
                    </div>
                ))
            }
        </div>
    );
}
 
export default BlogList;