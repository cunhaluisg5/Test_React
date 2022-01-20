import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Graphic = ({ data }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide={true} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Media" fill="#2952a3" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Graphic;