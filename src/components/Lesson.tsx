import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import { isPast, format} from 'date-fns';
import PtBr from 'date-fns/locale/pt-BR';




interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

function Lesson(props: LessonProps) {
    const {slug} = useParams<{ slug: string}>();
    const isActiveLesson = slug === props.slug;
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm'",{
        locale:PtBr,
    });

    return(
        <div>
            {isLessonAvailable ? (
                <Link to={`/event/lesson/${props.slug}`} className="group">

                    <span className="text-gray-300">
                        {availableDateFormatted}
                    </span>
                    <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg bg-green-500': ''}`}>
                        <header className="flex items-center justify-between pb-3">
                            <span className={`flex gap-2 text-sm text-blue-500   font-medium items-center ${isActiveLesson ? 'text-gray-50' : ''}`}>
                                <CheckCircle size={20}/>
                                Conteúdo liberado
                            </span>
                            <span className="text-xs px-2 py-[0.125rem] text-white border border-green-300 font-bold rounded">
                                {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                            </span>
                        </header>
                        <strong>{props.title}</strong>
                    </div>
                </Link>
            ) : (
                <div className="group">
                    <span className="text-gray-300">
                        {availableDateFormatted}
                    </span>
                    <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-orange-500">
                        <header className="flex items-center justify-between pb-3">
                            <span className="flex gap-2 text-sm text-orange-500 font-medium items-center">
                                <Lock size={20}/>
                                Em breve
                            </span>
                            <span className="text-xs px-2 py-[0.125rem] text-white border border-orange-500 font-bold rounded">
                                {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                            </span>
                        </header>
                        <strong>{props.title}</strong>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Lesson;