import useCollapse from "react-collapsed"

import { faUser, faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Profile() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  function handleOnClick() {
    setExpanded(!isExpanded)
  }
  return (
    <div className="profile">
      <div
        className="header-profile"
        {...getToggleProps({ onClick: handleOnClick })}
      >
        <FontAwesomeIcon icon={faUser} />
        <strong className="location-text"> Perfil </strong>
        <FontAwesomeIcon icon={faSortDown} className="profile-sort-down" />
      </div>
      <div className="content-profile" {...getCollapseProps()}>
        <ul className="content">
          <li>INGRESSOS</li>
          <li>MINHA CONTA</li>
          <li>SAIR</li>
        </ul>
      </div>
    </div>
  )
}
