import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  justify-content: center;
  background-color: #0097e6;
`;

export const Heroes = styled.div``;

export const Hero = styled.p.attrs({
  containerStyle: {
    paddingHorizontal: 24,
    backgroundColor: "#0097e6",
    alignItems: "center"
  },
  titleStyle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold"
  },
  subtitleStyle: {
    color: "#ffffff"
  },
  subtitleProps: {
    numberOfLines: 1
  }
})``;
