import React from "react";
import { Route } from "react-router-dom";
import bookList from "../Components/bookList";
import BookByID from "../Components/BookByID";
import BookBy2Params from "../Components/bookBy2Params";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/2017-2018/dcs/dev_35/client_app/" component={bookList} />
            <Route  path="/2017-2018/dcs/dev_35/client_app/BookByID" component={BookByID} />
            <Route  path="/2017-2018/dcs/dev_35/client_app/BookBy2Params" component={BookBy2Params} />
        </React.Fragment>
    );}

export default ReactRouter;
