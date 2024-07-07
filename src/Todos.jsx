import React from 'react';

const Todos = ({ list }) => {
    return (
        <div>
            {
                list.map((todo) => (
                    <table className="table table-dark" key={todo.id}>
                        <tbody>
                            <tr>
                                <td>{todo.name}</td>
                                <td><i className="bi bi-pencil"></i></td>
                                <td><i className="bi bi-trash"></i></td>
                            </tr>
                        </tbody>
                    </table>
                ))
            }
        </div>
    );
};

export default Todos;
