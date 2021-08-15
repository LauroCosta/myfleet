import "./style.scss";

import  maintenence  from "../../assets/images/maintenance.svg"

type Item = {
  description: string;
  type: string;
  value: number;
  locale: string;
  img: string;
  date: Date;
}

export function ItemList(item: Item ) {
  return (
    <div className="container">
      
      <img className={item.type} src={item.type} alt="tipo de despesa"/>
      
      <div>
        <h1>{item.description}</h1>
        <h2>{item.locale}</h2>
        <strong>{item.date}</strong>
      </div>

      <h1>{item.value}</h1>
    </div>    

  )
}