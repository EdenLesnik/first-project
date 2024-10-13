import { joiResolver } from "@hookform/resolvers/joi";
import { FloatingLabel, Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import LoginSchema from "../../Validations/LoginSchema";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Flex from "../Flex/Flex";
import { FlexAligns } from "../../enums/FlexAligns";

// Import Redux hooks and login action
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';

const Login = () => {
    const dispatch = useDispatch();  // Initialize dispatch from Redux

    const initialFormData = {
        email: "",
        password: ""
    };

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: initialFormData,
        mode: "onChange",
        resolver: joiResolver(LoginSchema)
    });

    const onSubmit = async (form: any) => {
        try {
            const res = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', form)
            console.log("data", res.data);

            // If login is successful, dispatch the login action
            dispatch(login());

            toast.success('User successfully logged in');
        } catch (error) {
            dispatch(login());
            console.log(error);
            toast.error('User failed to login');
        };
    };

    return (
        <>
            <Flex items={FlexAligns.START} justify={FlexAligns.CENTER} className="w-full min-h-screen m-auto bg-gray-200">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center w-[400px] gap-4 m-auto rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
                    <FloatingLabel
                        label="Email"
                        type="email"
                        variant="standard"
                        {...register("email")}
                        color={errors.email ? "error" : "success"}
                    />
                    <span className="text-sm text-red-800">{errors.email?.message}</span>

                    <FloatingLabel
                        label="Password"
                        type="password"
                        variant="standard"
                        {...register("password")}
                        color={errors.password ? "error" : "success"}
                    />
                    <span className="text-sm text-red-800">{errors.password?.message}</span>

                    <Button type="submit" disabled={!isValid}>Sign In</Button>
                    <ToastContainer />
                </form>
            </Flex>
        </>
    )
};

export default Login;
