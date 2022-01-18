import React from "react";
import ReactLoading from "react-loading";

import {Container, Text} from "./style";

const Load = () => {
    return(
        <Container>
            <ReactLoading type="bars" color="#000000" height={50} width={50}/>
            <Text>Carregando...</Text>
        </Container>
    );
};

export default Load;