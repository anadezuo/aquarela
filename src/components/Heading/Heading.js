import styled from "styled-components";
const colorPrimary = "#ffc107";

const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 2555, 255, 0.2);

    &::after {
      content: "";
      letter-spacing: 2px;
      position: absolute;
      left: 0;
      bottom: -3px;
      background-color: ${colorPrimary};
      height: 5px;
      width: 70px;
    }
  }

  h1 {
    padding-bottom: 25px;
  }
`;

export default Heading;
