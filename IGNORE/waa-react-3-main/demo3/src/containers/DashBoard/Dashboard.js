
import React from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from "./PageRoutes";

export default function Dashboard() {

  

    return (
        <React.Fragment>   
            <div className='header'>
                <Header />
            </div>
            <div className="Product">
                <PageRoutes />
            </div>
        </React.Fragment>

    )

}