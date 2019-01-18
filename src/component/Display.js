import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const DisplayLayout = styled.div`
  background-color: #858694;
  color: white;
  text-align: right;
  font-weight: 200;
  flex: 0 0 auto;
  width: 100%;
  > div {
    font-size: 2.5rem;
    padding: 0.2rem 0.7rem 0.1rem 0.5rem;
  }
`;
class Display extends React.Component {
  render() {
    return (
      <DisplayLayout>
        <div>{this.props.value}</div>
      </DisplayLayout>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
