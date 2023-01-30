import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function InputModal ({inputFieldClass, iconName, placeHolder, errorMessage}) {
  let inputType = "text"
  if (inputFieldClass=="email") {
    inputType = "email"
  } else if (inputFieldClass=="password") {
    inputType = "password"
  }
  return (
    <div>
      <div className={"login-input change-input-" + inputFieldClass}>
        <FontAwesomeIcon icon={iconName} className="icon-login"/>
        <input type={inputType} id={inputFieldClass} placeholder={placeHolder} />
      </div>
      <span className={"required-field required-field-" + inputFieldClass}>
        {errorMessage}
      </span>
    </div>
  )
}