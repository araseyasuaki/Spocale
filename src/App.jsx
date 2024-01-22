import './App.scss';
import Akeyvisual from './Akeyvisual//keyvisual'
import Bintroduction from './Bintroduction/introduction'
import Cworrise from './Cworries/worries'
import Dfunction from './Dfunction/function'
import Emaincontent from './Emaincontent/maincontent'
import Fuser from './Fuser/user'


function App() {
    return(
      <>
        <Akeyvisual/>
        <Bintroduction/>
        <Cworrise/>
        {/* <Dfunction/> */}
        <Emaincontent/>
        {/* <Fuser/> */}
      </>
    )
}

export default App;