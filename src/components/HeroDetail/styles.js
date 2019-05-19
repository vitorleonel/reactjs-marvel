import styled from "styled-components";

export const Container = styled.div.attrs({
  overlayStyle: {
    paddingHorizontal: 24
  }
})`
  justify-content: flex-start;
`;

export const ArrowBack = styled.p.attrs({
  iconStyle: {
    marginRight: "auto",
    marginBottom: 16
  }
})``;

export const Header = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 192px;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 1,
  h1Style: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16
  },
  h2Style: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16
  }
})``;

export const Description = styled(Text)`
  font-size: 16px;
  margin-bottom: 6px;
`;
