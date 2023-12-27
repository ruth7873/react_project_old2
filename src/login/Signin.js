import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
    .object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        adress: yup.string().required(),
        email: yup.string(),
        birthDate: yup.date(),
        password: yup.string().required(),
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
            <label>First Name: </label>
            <input type="text" placeholder="first name" {...register("firstName")} />
            <p>{errors.firstName?.message}</p>

            <label>Last Name: </label>
            <input type="text" placeholder="last name" {...register("lastName")} />
            <p>{errors.lastName?.message}</p>

            <label>Adress: </label>
            <input placeholder="adress" {...register("adress")} />
            <p>{errors.adress?.message}</p>

            <label>Email: </label>
            <input type="email" placeholder="email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <label>Birth Date: </label>
            <input type="date" {...register("birthDate")} />
            <p>{errors.birthDate?.message}</p>


            <label>Password: </label>
            <input
             placeholder="Password"
             minLength={5}

            type="password"{...register("password")} />
            <p>{errors.password?.message}</p>
           

            <input type="submit" />
        </form>
    )
}