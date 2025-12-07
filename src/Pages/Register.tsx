import Form from "@/Components/Form/Form";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface FormRegister {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
}

export default function Register() {

    const [error, setError] = useState<string>("");
    const [values, setValues] = useState<FormRegister>({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    })

    const getValuesForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (values.senha !== values.confirmarSenha) {
            setError("password-mismatch")
            return toast("As senhas não coincidem!", { type: "error", position: "bottom-center" });
        }

        // if(values.senha.length < 6) {
        //     setError("password-length")
        //     return toast("A senha deve ter no mínimo 6 caracteres!", { type: "error", position: "bottom-center" });
        // }

        if (
            !values.nome ||
            !values.email ||
            !values.senha ||
            !values.confirmarSenha
        ) {
            setError("null-field")
            return toast("Preencha todos os campos!", { type: "error", position: "bottom-center" });
        }
    }

    return (
        <main className="w-full flex justify-center items-center min-h-screen">
            <Form
                onSubmit={onSubmitForm}
                title="Cadastro"
                className="w-full max-w-[500px] bg-white m-5 p-5 rounded-xl shadow-md"
                textButton="Cadastrar"
            >
                <div className="mb-4">
                    <Input
                        type="text"
                        placeholder="Nome"
                        className={`${error == "null-field" ? 'w-full border-red-500' : 'w-full'}`}
                        onChange={getValuesForm}
                        name="nome"
                        value={values.nome}
                    />
                    {
                        error == "null-field" && !values.nome && <p className="text-red-500 mb-2">O nome é obrigatório.</p>
                    }
                </div>
                <div className="mb-4">
                    <Input
                        type="email"
                        placeholder="E-mail"
                        className={`${error == "null-field" ? 'w-full border-red-500' : 'w-full'}`}
                        onChange={getValuesForm}
                        name="email"
                        value={values.email}
                    />
                    {
                        error == "null-field" && !values.email && <p className="text-red-500 mb-2">O e-mail é obrigatório.</p>
                    }
                </div>
                <div className="mb-4">
                    <Input
                        type="password"
                        placeholder="Senha"
                        className={`${error == "null-field" || error == "password-mismatch" || error == "password-length" ? 'w-full border-red-500' : 'w-full'}`}
                        onChange={getValuesForm}
                        name="senha"
                        value={values.senha}
                    />
                    {
                        error == "password-length" && <p className="text-red-500 mb-2">A senha deve ter no mínimo 6 caracteres.</p>
                    }
                    {
                        error == "null-field" && !values.senha && <p className="text-red-500 mb-2">A senha é obrigatória.</p>
                    }
                </div>
                <div className="mb-4">
                    <Input
                        type="password"
                        placeholder="Confirme sua senha"
                        className={`${error == "null-field" || error == "password-mismatch" ? 'w-full border-red-500' : 'w-full'}`}
                        onChange={getValuesForm}
                        name="confirmarSenha"
                        value={values.confirmarSenha}
                    />
                    {
                        error == "null-field" && !values.confirmarSenha && <p className="text-red-500 mb-2">A confirmação de senha é obrigatória.</p>
                    }
                    {
                        error == "password-mismatch" && <p className="text-red-500 mb-2">As senhas não coincidem.</p>
                    }
                </div>
                <p>
                    Já possui uma conta? <Link to="/" className="text-blue-500 underline">Entrar</Link>
                </p>
            </Form>
        </main>
    )
}