const Todos =()=>{
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
    return(
        <div>{
            TodoItem.map((todo)=>(
<table class="table table-dark">
  <tbody>
    <tr>
      <td>{todo.name}</td>
      <td><i class="bi bi-pencil"></i></td>
      <td><i class="bi bi-trash"></i></td>
    </tr>
    {/* <tr>
      <td>Jacob</td>
      <td><i class="bi bi-pencil"></i></td>
      <td><i class="bi bi-trash"></i></td>
    </tr>
    <tr>
      <td>Larry</td>
      <td><i class="bi bi-pencil"></i></td>
      <td><i class="bi bi-trash"></i></td>
    </tr> */}
  </tbody>
</table>
            ))
            }
             
        </div>
    );
};


export default Todos;