import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  width: ${props => (props.wide ? "50%" : "25%")};
  justify-content: center;
  align-items: center;
  background: ${props => (props.orange ? "#f5923e" : "#e0e0e0")};
  color: ${props => (props.orange ? "white" : "")};
  border: 0px;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  margin: 0 1px 0 0;
`;

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const { orange, wide } = this.props;
    return (
      <ButtonContainer onClick={this.handleClick} orange={orange} wide={wide}>
        {this.props.name}
      </ButtonContainer>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default Button;
