import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";


function Evento () {

    const { slug } = useParams<{ slug: string }>()
    const [active, setActive] = useState(true);
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                { slug ?
                    <Video lessonSlog={slug} /> : 
                    <div className="flex-1">
                        Criar um component com mensagem escolha uma aula
                    </div>}
                    <Sidebar active=" " hidden="max-md:hidden"/>
            </main>
        </div>
    )
}
export default Evento;