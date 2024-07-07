import React from 'react';

const Todos = ({ list,  handleDelete }) => {
    // function handleEdit(todo) {
    //    console.log("yo "+todo.id);
    // //    list = list.
    // }

    // function handleDelete(todo) {
    //     const newTodos = [...list];
    //     newTodos.splice(0, );
    //     console.log(newTodos);
    //  }
    
    return (
        <div>
            {
                list.map((todo) => (
                    <table className="table table-dark" key={todo.id}>
                        <tbody>
                            <tr>
                                <td>{todo.name}</td>
                                <td><i className="bi bi-pencil"></i></td>
                                <td><i className="bi bi-trash"onClick={() => handleDelete(todo.id)}></i></td>
                            </tr>
                        </tbody>
                    </table>
                ))
            }
        </div>
    );
};

export default Todos;
