import styled from "styled-components";
import { metrics, colors } from "../../styles";

import ImageBackground from "../../images/ecossistema-background.svg";

export const Image = styled.img.attrs({
  alt: props => props.alt || "Logo Botcamp"
})``;

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url(${ImageBackground});
  background-size: cover;
`;

export const Button = styled.button`
  width: 280px;
  height: 50px;
  border-radius: ${metrics.baseRadius * 5}px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: 0;
  text-transform: uppercase;
  font-size: 20px;

  &:hover {
    opacity: 0.6;
  }
`;
