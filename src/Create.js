import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
const [title, setTitle] =useState('');
const [body, setBody] =useState('');
const [author, setAuthor] =useState('mario');
const [isPending, setIsPending]= useState(false);
const history =useHistory();

const handleSubmit= (e) => {
    e.preventDefault(); //prevents from page from refreshing while submitting 
    const blog={title, body, author};  // we donot need to assign id as json automatically does it for us

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
        method: 'POST',  //Defining type of request
        headers: {"Content-Type": "application/json"}, //Telling the server type of content we sending with this request
        body: JSON.stringify(blog) // data we sending with the request and also turing object into json string 
    }).then(() =>{
        console.log('New blog added');
        setIsPending(false);
        //history.go(-1);  go back one through the history
        history.push('/'); // to redirect / push to the homepage whenever a new post is added 
    })

    
}

    return ( 
        <div className="create">
            <h2>Add a New Blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}  //Linking with the title form 
                    onChange={(e)=> setTitle(e.target.value)} // when we type input field, it is going to trigger the function on change
                    //and gonna update the state of the tittle everytime we type in the tittle 
                    />
                     <label>Blog body:</label>
                <textarea
                    requird
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;