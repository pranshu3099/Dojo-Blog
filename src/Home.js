import Bloglist from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
 

//    const handleDelete = (id)=>{
//        const newBlogs = blogs.filter(blog =>blog.id!==id);
//        setblogs(newBlogs);
//    }

 

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs = {blogs} title = "All blogs!"/>}
            {/* <Bloglist blogs = {blogs.filter((blog)=>blog.author==='mario')} title="mario's blogs"/> */}

            {/* <button onClick = {(e)=> handleClickAgain(e,"mario")}>Click me again</button> */}
        </div>
     );
}
 
export default Home;