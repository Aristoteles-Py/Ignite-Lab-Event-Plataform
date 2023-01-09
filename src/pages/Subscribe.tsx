import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

function Subscriber(){

    const CREATE_SUBSCRIBER_MUTATION = gql`
        mutation SubScriber($name: String!, $email: String!) {
            createSubscriber(data: {name: $name, email: $email}){
                id
            }
        }
    `

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

    const [name, setName] = useState(' ');
    const [email, setEmail] = useState(' ');
    
    const navigate = useNavigate()

    async function hendleSbscribe(event: FormEvent){
        event.preventDefault();
        await createSubscriber({
            variables:{
                name,
                email,
            }
        })
        navigate('/event/')
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center  max-flex">

            <div className="flex w-full max-w-[1100px] justify-between items-center mt-20 max-auto max-md:flex-col ">
                <div className="max-w-[648px] max-md:text-center max-md:flex max-md:flex-col max-md:justify-center">
                    <div className="max-md:justify-center max-md:w-full max-md:flex">
                        <Logo/> 
                    </div>
                    
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong  className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded max-md:w-full max-md:mt-5">
                    <strong className="text-2xl ab-6 block">
                        Inscreva-se gratuitamente
                    </strong>
                    <form onSubmit={hendleSbscribe} className="flex flex-col gap-3 w-full mt-4">
                        <input
                        className="bg-gray-900 rounded px-5 h-14"
                        type="text" 
                        placeholder="Seu nome completo"
                        onChange={event => setName(event.target.value)}
                        />
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email"
                        placeholder="Digite seu e-mail"
                        onChange={event => setEmail(event.target.value)}
                        />

                    <button 
                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                    type="submit"
                    disabled={loading}>
                        Garantir minha vaga
                    </button>

                    </form>
                </div> 
            </div>
            <img src="src/assets/Group.png" className="mt-10" alt=""/>
        </div>
    )
}
export default Subscriber;