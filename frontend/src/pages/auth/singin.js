import React from "react";

import { Container, Button, Image } from "./styles";
import Botcamp from "../../images/botcamp.svg";

const SignIn = () => (
  <Container>
    <Image src={Botcamp} />
    <Button>Entrar</Button>
  </Container>
);

export default SignIn;
