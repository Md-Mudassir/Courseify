import React, { Fragment } from "react";

export const Search = ({ placeholder, handleChange }) => (
         <Fragment>
           <div className="form-group">
             <input
               className="form-control lg"
               type="search"
               placeholder={placeholder}
               onChange={handleChange}
             />
           </div>
         </Fragment>
       );
