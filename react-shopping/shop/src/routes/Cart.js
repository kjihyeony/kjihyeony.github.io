import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {changeName } from './../store'

function Cart(){

  let state = useSelector( (state) => { return state } );
  let dispatch = useDispatch();

  return (
    <div>
      {state.user}의 가방

      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>{state.stock}</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((a, i) =>
            <tr key={i}>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
              <button onClick={ ()=>{
                dispatch(changeName())
              } }>
              +
              </button>  </td>
            </tr>
          )
        }
      </tbody>
    </Table> 
    </div>
  )
}

export default Cart