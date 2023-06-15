import './index.css'
import { Button, Input  } from 'antd';
import { useState } from 'react';
import { generateRandomId } from '@/utils'

export default function TodoList() {
  const [title, setTitle] = useState('')
  const [list, setList] = useState([])
  const listItems = list.map(obj => <li key={obj.id}>{obj.text}</li>);

  const handleAdd = () => {
    if (title === '') return
    const id = generateRandomId(10)
    console.log(id)
    const obj = {
      id: id,
      text: title
    }
    list.push(obj)
    setList(list)
    console.log(list)

  }
  return (
    <div className="container">
      <h3>TodoList</h3>

      <div className='create'>
        <Input placeholder="Basic usage" value={title} onChange={(e) => {setTitle(e.target.value)}} />
        <Button ghost onClick={handleAdd}>Default</Button>
      </div>
      <div className='list'>
        <ul>{listItems}</ul>
      </div>
    </div>
  )
}