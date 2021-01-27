import { useRouter } from 'next/router'

import Widget from '../src/components/Widget/widget'
import QuizContainer from '../src/components/QuizContainer'
import QuizBackground from '../src/components/QuizBackground'

import db from '../db.json'

export default function Quiz(){
    const router = useRouter()
    const [userName, setUserName] = React.useState('')

    React.useEffect(()=>{
        setUserName(router.query?.name)
    },[])

    return (
        <>
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>Quiz Perguntas e Respostas</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <h1>Olá {userName}</h1>
                        <p>Aqui vai a lista de perguntas</p>
                    </Widget.Content>
                </Widget>
        </QuizContainer>
        </QuizBackground>
        </>
    )
}
