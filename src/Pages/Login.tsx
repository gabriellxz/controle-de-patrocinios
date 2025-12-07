import Form from "@/Components/Form/Form";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface FormLogin {
    email: string;
    senha: string;
}

export default function Login() {

    const [error, setError] = useState<boolean>(false);
    const [values, setValues] = useState<FormLogin>({
        email: '',
        senha: ''
    })

    const getValuesForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!values.email || !values.senha) {
            setError(true)
            return toast("Preencha todos os campos!", { type: "error", position: "bottom-center" });
        }
    }

    return (
        <main className="w-full flex justify-center items-center min-h-screen">

            <Form
                onSubmit={onSubmitForm}
                title="Login"
                className="w-full max-w-[500px] bg-white m-5 p-5 rounded-xl shadow-md"
                textButton="Entrar"
            >
                <div className="mb-4">
                    <Input
                        type="email"
                        placeholder="E-mail"
                        className={`${error ? 'w-full border-red-500' : 'w-full'}`}
                        name="email"
                        value={values.email}
                        onChange={getValuesForm}
                    />
                    {
                        error && !values.email && <p className="text-red-500 mb-2">O e-mail é obrigatório.</p>
                    }
                </div>
                <div className="mb-4">
                    <Input
                        type="password"
                        placeholder="Senha"
                        className={`${error ? 'w-full border-red-500' : 'w-full'}`}
                        name="senha"
                        value={values.senha}
                        onChange={getValuesForm}
                    />
                    {
                        error && !values.senha && <p className="text-red-500 mb-2">A senha é obrigatória.</p>
                    }
                </div>
                <p>
                    Não possui uma conta? <Link to="/register" className="text-blue-500 underline">Registre-se</Link>
                </p>
            </Form>
        </main>
    )
}