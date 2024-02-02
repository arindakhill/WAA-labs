import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!</h2>
            <p>That page cannot be found</p>
            <Link to='/'> Go back to the Home page...</Link>
        </div>
     );
}
 
export default NotFound;