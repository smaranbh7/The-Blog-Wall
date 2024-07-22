import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
const { id } = useParams();
const { data: blog, error, ispending }= useFetch('http://localhost:8000/blogs/' +id);
const history= useHistory();

const handleClick=() => { //To delete the post 
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE' //To delete the id
    }) .then(() => {
        history.push('/'); // to redirect to homepage when we delete the post
    })

}

    return ( 
        <div className="blog-details">
            { ispending && <div>Loading....</div> }
            { error &&<div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;


// const {} = useParams()   helps to grab route parameters from the route