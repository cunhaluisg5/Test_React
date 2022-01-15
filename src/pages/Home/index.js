import React, {useState, useEffect} from "react";

import Header from "../../components/Header/header";

function Home(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        const object = localStorage.getItem("user");

        setUser(JSON.parse(object));
    }, []);

    return(
        <div>
            <Header user={user}/>
            <h1>Home</h1>
        </div>
    );
};

export default Home;