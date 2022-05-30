import React from "react"
import {IAuth} from "../../interface";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaAuth} from "../../schema";
import s from "./Authorization.module.css"
const Authorization:React.FC = () => {

    const {formState: {errors}, register, handleSubmit} = useForm<IAuth>({
        resolver: yupResolver(schemaAuth),
        mode: "onBlur"
    })
    const getValues = (data:IAuth) => console.log(data)
    return(
        <div className={s.container}>
            <form className={s.authContainer} onSubmit={handleSubmit(getValues)} >
                <fieldset>
                    <div>
                        <input type="text" {...register("nickName")} placeholder={"Ваш акаунт, пожалуйста"}/>
                        {errors?.nickName && <p>{errors.nickName.message}</p>}
                    </div>
                    <div>
                        <input type="email" {...register("email")} placeholder={"Ваш имаил, пожайлуйста"}/>
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <input type="password" {...register("password")} placeholder={"Пароль"} />
                        {errors?.password && <p>{errors.password.message}</p>}
                    </div>
                </fieldset>
                <input className={s.btn} type="submit"/>
            </form>
        </div>
    )
}
export default Authorization