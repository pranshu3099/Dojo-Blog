import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="Not-Found">
            <h2>Sorry</h2>
            <p>Page Not Found</p>
            <Link to="/">Go back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;