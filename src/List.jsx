import React from 'react';
import Todos from "./Todos";

const List = () => {
    const TodoItem = [
        {
            id: 1,
            name: "Task 1"
        }, {
            id: 2,
            name: "Task 2"
        }, {
            id: 3,
            name: "Task 3"
        }
    ];

    const [list, setList] = React.useState(TodoItem);
    const [name, setName] = React.useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList = list.concat({ id: list.length + 1, name });
        setList(newList);
        setName('');
    }

    const handleDelete = (id) => {
      const newList = list.filter(todo => todo.id !== id);
      setList(newList);
  };

    return (
        <div className="card1 card text-white bg-dark mb-3 border-dark">
            <div className="card-header">
                To Do List
            </div>
            <div className="card-body">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add item"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary" onClick={handleAdd}>Add task</button>
            </div>
            <Todos list={list} handleDelete={handleDelete} />
        </div>
    );
};

export default List;
