
import { Link } from "react-router-dom"
import Signin from "./Signin"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import HomePage from "../pages/HomePage"
import {Routes, Route} from 'react-router-dom'


const schema = yup
    .object({
        userName: yup.string().required(),
        password: yup.string().min(3).required(),
    })
    .required()


export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
     const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>User Name: </label>
            <input placeholder={"user name"} type="text" {...register("userName")} />
            <p>{errors.userName?.message}</p>

            <label>Password: </label>
            <input type="password"{...register("password")} />
            <p>{errors.password?.message}</p>

            <Link to={'/signin'}>Don't have an account yet? Sign in now</Link>
            <br />

            <input type="submit"/>
        </form>
    )
}

