import React from "react";
import {useForm} from "react-hook-form";
import {IReg} from "../../interface";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaReg} from "../../schema";
import Links from "../Links/Link";

const Registration: React.FC = () => {
    const {register, formState: {errors}, handleSubmit, watch} = useForm<IReg>({
        mode:"onBlur",
        resolver: yupResolver(schemaReg)
    })
    const getValues = (data:IReg) => console.log(data)
    return(
        <div>
            <Links/>
            <form onSubmit={handleSubmit(getValues)}>
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
                    <input type="password" placeholder={"Пароль"} {...register("password")}/>
                    {errors?.email && <p>{errors.email.message}</p>}

                    <input type="password" placeholder={"Повторите пароль"} {...register("confPassword")}/>
                    {errors?.email && <p>{errors.email.message}</p>}
                </fieldset>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default Registration