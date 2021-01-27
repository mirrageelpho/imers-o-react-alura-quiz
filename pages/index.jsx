
import { useRouter } from 'next/router'

import Widget from '../src/components/Widget/widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Form from '../src/components/Form/Form';

import db from '../db.json' 

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  const sendForm = e =>{
    e.preventDefault()
    console.log('Enviando...')
    router.push(`quiz?name=${name}`)
    setName('')
  }



  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Form onSubmit={sendForm}>
              <Form.Input 
                placeholder="Name" 
                value={name}
                onChange={e=>{
                  setName(e.target.value)
                }}
              />
              <Form.Button type="submit" disabled={name.length <= 2}>Jogar -- {name}</Form.Button>
            </Form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://www.github.com/mirrageelpho" />
    </QuizBackground>
  )
}
