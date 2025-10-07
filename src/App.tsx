
import './App.css'
import FrontCard from './components/frontCard'

function App() {


  return (
    <>
    <div className=' flex flex-col items-center gap-8'>


      <FrontCard isReverse={false} />
      <FrontCard isReverse ={true}/>

    </div>
  
    </>
  )
}

export default App
