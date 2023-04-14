import { useState } from 'react'
import './App.css'
import List from './components/List'
import data from './data'

function App() {
  const [birthdayList, setBirthdayList] = useState(data)

  return (
    <maim>
      <section className='container'>
        <h3>{birthdayList.length} aniversariantes hoje</h3>
        
        
        
        <List birthdayList={birthdayList} />
        <button onClick={() => setBirthdayList([])}>Limpar lista</button>
      </section>
    </maim>
  )
}


export default App