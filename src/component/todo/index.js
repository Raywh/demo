import './index.css'
import { Button, Input  } from 'antd';
import { useState } from 'react';
import { generateRandomId } from '@/utils'

export default function TodoList() {
  const [title, setTitle] = useState('')
  const [list, setList] = useState([])
  const listItems = list.map(person => <li>{person}</li>);

  const handleAdd = () => {
    console.log(list)
    const id = generateRandomId(10)
    console.log(id)

    list.push(title)
    setList(list)
  }
  return (
    <div className="container">
      <h3>TodoList</h3>

      <div className='create'>
        <Input placeholder="Basic usage" value={title} />
        <Button ghost onClick={handleAdd}>Default</Button>
      </div>
      <div className='list'>
        <ul>{listItems}</ul>
      </div>
    </div>
  )
}