import { FooterStyle } from "./style";

import { NavLink } from "react-router-dom";

import carIcon from "../../assets/images/car.svg";
import homeIcon from "../../assets/images/home.svg";
import km from "../../assets/images/km.svg";
import user from "../../assets/images/user.svg";
import { useExpense } from "../../contexts/ExpenseContext";

export function Footer() {

  const { openModal } = useExpense();

  return (
    <>
      <FooterStyle>
        <NavLink to="dashboard" activeClassName="active">
          <img src={homeIcon} alt="Tela inicial" />
        </NavLink>

        <NavLink to="mileage" activeClassName="active">
          <img src={km} alt="Tela quilometragem" />
        </NavLink>

        <button className="circleButton" onClick={openModal}>+</button>

        <NavLink to="vehicle" activeClassName="active">
          <img src={carIcon} alt="Veículo" />
        </NavLink>

        <NavLink to="profile" activeClassName="active">
          <img src={user} alt="Tela perfil" />
        </NavLink>
      </FooterStyle>
    </>
  )
}