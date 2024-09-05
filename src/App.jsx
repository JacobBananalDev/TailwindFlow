import Header from './components/header/Header'

function App() {

  return (
    <div className="flex bg-primaryLightBackground dark:bg-primaryDarkBackground">
      <div className="flex-1 flex flex-col ">
        <Header headerLabel='TailwindFlow'/>
      </div>
    </div>
  )
}

export default App
