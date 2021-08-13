/**
 * This file renders the breadcrumbs
 *
 */
 import React from 'react';
 
 const Breadcrumbs = () => {
  
     return (
        <div className="elc-breadcrumbs">
            <a href="https://www.esteelauder.com/" className="breadcrumb-home">Home</a>
            <div className="breadcrumb-slash"> / </div>
            <div className="breadcrumb-current">Repair Serum</div>
        </div>
     );
 }
  
 // Export out the React Component
 export default Breadcrumbs;