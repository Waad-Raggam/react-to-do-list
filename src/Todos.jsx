import React from 'react';

const Todos = ({  list,
    handleDelete,
    handleEditClick,
    handleEditChange,
    handleEditSave,
    editTodo,
    editName}) => {
    
    return (
        <div>
            {
                list.map((todo) => (
                    <table className="table table-dark" key={todo.id}>
                        <tbody>
                            <tr>
                            {editTodo && editTodo.id === todo.id ? (
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={handleEditChange}
                                            className="form-control"
                                        />
                                    ) : (
                                        todo.name
                                    )}
                                <td> {editTodo && editTodo.id === todo.id ? (
                                        <button onClick={() => handleEditSave(todo.id)} className="btn btn-success">Save</button>
                                    ) : (
                                        <i className="bi bi-pencil" onClick={() => handleEditClick(todo)}></i>
                                    )}</td>
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
