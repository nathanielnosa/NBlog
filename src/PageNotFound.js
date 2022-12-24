import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="notfound">
            <h3>Error! Sorry</h3>
            <p>Page not found</p>
            <Link to='/'>Go back home ..</Link>
        </div>
     );
}
 
export default NotFound;