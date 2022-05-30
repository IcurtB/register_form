import React from "react"
import {Link} from "react-router-dom"
import s from "./Links.module.css"
const Links:React.FC = () => {
    return(
        <header className={s.df}>
            <Link to={"/"}>Авторизация</Link>
            <Link to={"/reg"}>Регистарция</Link>
        </header>
    )
}
export default Links