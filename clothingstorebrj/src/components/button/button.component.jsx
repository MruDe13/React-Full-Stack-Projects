//It takes the text to be displayed on the button as buttonText prop
// and for the type of button it takes buttonType prop

import "./button.styles.scss";

const Button = ({ buttonText, buttonType, buttonStyle, onClickHandler }) => {
  return (
    <button
      className={`button-container ${buttonStyle ? buttonStyle : ""}`}
      type={`${buttonType ? buttonType : ""}`}
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
};

export default Button;
