import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('Yoshi');
    const[body,setBody] = useState('');
    const [isPending,setisPending] = useState(false);
    const History = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,author,body};
        setisPending(true);
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"content-type" : "application/Json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog added");
            setisPending(false);
            History.push('/');
        })
        
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                
                />
                <label>Blog body:</label>
                <textarea required 
                value = {body}
                onChange = {(e)=>setBody(e.target.value)}
                
                >
                </textarea>
                <label>Author:</label>
                <select
                    value = {author}
                    onChange = {(e)=>setAuthor(e.target.value)}
                 >
                    <option>Mario</option>
                    <option>Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>} 
                {isPending && <button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author  }</p>
            </form>
        </div>
     );
}
 
export default Create;