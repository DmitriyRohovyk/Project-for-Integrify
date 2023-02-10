import React from 'react';
import {Countries} from '../pages/Countries';
import {CountryPage} from '../pages/CountryPage';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Countries/>,
    },
    {
        path: "country/:countryCode",
        element: <CountryPage/>,
    },
]);

export const MainRoutes = () => {
    return (
        <RouterProvider router={router}/>
    )
}

