import React from "react";
import {useForm} from "react-hook-form";
import {IReg} from "../../interface";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaReg} from "../../schema";
import s from "./Registration.module.css"

import Links from "../Links/Link";
const Registration: React.FC = () => {
    const {register, formState: {errors}, handleSubmit, watch} = useForm<IReg>({
        mode:"onBlur",
        resolver: yupResolver(schemaReg)
    })
    const getValues = (data:IReg) => console.log(data)
    const showPassword = watch("checked", false)
    return(
        <div className={s.container}>
            <Links/>
            <form className={s.regContainer} onSubmit={handleSubmit(getValues)}>
                <fieldset>
                    <div>
                        <input type="text" placeholder={"Имя"} {...register("firstName")} />
                        {errors?.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder={"Фамилие"} {...register("lastName")}/>
                        {errors?.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder={"Акаунт"} {...register("nickName")}/>
                        {errors?.nickName && <p>{errors.nickName.message}</p>}
                    </div>
                    <div>
                        <input type="email" placeholder={"Имаил"} {...register("email")}/>
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label htmlFor="check">
                            <input id="check" className={s.check}
                                   type="checkbox" {...register("checked")}/>
                            Показать пароль
                        </label>
                    </div>
                    <div>
                        <input type={showPassword ? "text" : "password"} placeholder={"Пароль"} {...register("password")}/>
                        {errors?.password && <p>{errors.password.message}</p>}
                    </div>

                    <div>
                        <input type={showPassword ? "text" : "password"} placeholder={"Повторите пароль"} {...register("confPassword")}/>
                        {errors?.confPassword && <p>{errors.confPassword.message}</p>}
                    </div>
                </fieldset>
                <input className={s.btn} type="submit"/>
            </form>
        </div>
    )
}
export default Registration