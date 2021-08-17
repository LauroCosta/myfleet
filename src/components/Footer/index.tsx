import { FooterStyle } from "./style";

import { NavLink, useHistory } from "react-router-dom";

import carIcon from "../../assets/images/car.svg";
import homeIcon from "../../assets/images/home.svg";
import km from "../../assets/images/km.svg";
import user from "../../assets/images/user.svg";
import { useExpense } from "../../contexts/ExpenseContext";

export function Footer() {

  const {openModal} = useExpense();

  return (
    <>
      <FooterStyle>
        <NavLink to="dashboard" activeClassName="active">
          <a><img src={homeIcon} alt="Tela inicial" /></a>
        </NavLink>

        <NavLink to="mileage" activeClassName="active">
          <a><img src={km} alt="Tela quilometragem" /></a>
        </NavLink>

        <button className="circleButton" onClick={openModal}>+</button>

        <NavLink to="vehicle" activeClassName="active">
          <a><img src={carIcon} alt="Veículo" /></a>
        </NavLink>

        <NavLink to="profile" activeClassName="active">
          <a><img src={user} alt="Tela perfil" /></a>
        </NavLink>
      </FooterStyle>
    </>
  )
}