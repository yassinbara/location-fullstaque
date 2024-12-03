import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import List from "./List";
import Create from "./Create";
import Update from "./Edite";
import Details from "./Details";

export const carRoutes = (
    <Route path="/voitures" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="noveau" element={<Create />} />
        <Route path=":id/modifier" element={<Update />} />
        <Route path=":id/details" element={<Details />} />
    </Route>
)