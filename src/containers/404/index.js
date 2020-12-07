// Page 404 
import React from 'react';
import { Link } from 'react-router-dom';


class PageNotFound extends React.Component {

    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="error-selection">
                                    <h1>404</h1>
                                    <h2 className="text-capitalize">page not found</h2>
                                    <Link to={"/products"} className="btn btn-solid product-q text-capitalize">back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}


export default PageNotFound;