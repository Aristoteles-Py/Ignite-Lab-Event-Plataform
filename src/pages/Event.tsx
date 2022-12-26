import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";


function Evento () {

    const { slug } = useParams<{ slug: string }>()

    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                { slug ?
                    <Video lessonSlog={slug} /> : 
                    <div className="flex-1">
                        Criar um component com mensagem escolha uma aula
                    </div>}
                <Sidebar/>
            </main>
        </div>
    )
}
export default Evento;