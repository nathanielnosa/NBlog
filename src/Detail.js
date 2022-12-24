import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Detail = () => {
    const {id} = useParams();
    const { data:blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useNavigate();
    const deletePost = ()=>{
        fetch(`http://localhost:8000/blogs/${blog.id}`,{
            method: 'DELETE'
        }).then(()=>{
            history('/')
        })
    }
     return ( 
        <div className="blog-detail">
            <h3>Blog Detail - {id}</h3>
            { isLoading && <div>Loading</div>}
            { error && <div>{error}</div>}
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>by:  {blog.author}</p>
                        <p>{blog.body}</p>
                        <p>
                        <button onClick={deletePost}>Delete</button>
                        </p>
                    </article>
                )
            }
        </div>
     );
}
 
export default Detail;