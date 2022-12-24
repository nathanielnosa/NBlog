import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const history = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();

        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=> {
            console.log('Blog added')
            history('/')
        })
    }

    return ( 
        <div className="container">
            <h2>Create Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                    <p>{title}</p>
                </div>
                <div className="form-group">
                    <label >Body</label>
                    <textarea value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
                    <p>{body}</p>
                </div>
                <div className="form-group">
                    <label >Author</label>
                    <select onChange={(e)=>setAuthor(e.target.value)} value = {author}>
                        <option selected disabled value="">--Select Author--</option>
                        <option value="Nathaniel">Nathaniel</option>
                        <option value="Nosa">Nosa</option>
                        <option value="Ncode">Ncode</option>
                    </select>
                    <p>{author}</p>
                </div>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;