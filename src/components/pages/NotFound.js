import React from 'react'

export default function NotFound() {
    return (
        <div>
       <h1 className="display-4"><span className="text-danger">404</span>    page not found</h1>   
        <p className="lead">Sorry, the page does not exist</p>
        <p className="text-secondary">Check the URL you entered</p>  
        </div>
    )
}
