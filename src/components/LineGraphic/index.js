import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Graphic = ({ data }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide={true} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Media" stroke="#2952a3" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Graphic;