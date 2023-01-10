import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Lesson from "./Lesson";

const GET_LESSONS_QUERY = gql `
    query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

interface propsmenu{
    active: string;
    hidden: string;
}

function Sidebar (props: propsmenu) {

    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <div className={`w-[348px] bg-gray-700 p-6 border-l border-gray-600 ${props.hidden} max-md:absolute max-md:w-full ${props.active}`}>
            <span className="font-bold text-2xl pb-6 border-b border-gray-500 block mb-9">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Sidebar;