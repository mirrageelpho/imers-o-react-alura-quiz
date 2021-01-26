import db from '../db.json' 
import Widget from '../src/components/Widget/widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
      <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://www.github.com/aeciocleber" />
    </QuizBackground>
  )
}
