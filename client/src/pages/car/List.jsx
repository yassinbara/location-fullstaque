import { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCare, getCars } from '../../redux/api/car'
import CarStatus from '../../components/CarStatus'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";

import { CiEdit } from "react-icons/ci";

const List = () => {
  const dispatch = useDispatch()
  const { cars } = useSelector(state => state.car)
  //   const getData = useCallback(
  //     () => {
  //       dispatch(getCars())
  //     },
  //     [dispatch],
  //   )
  // useEffect(()=>{
  //   getData()
  // },[getData])
  useEffect(() => {
    dispatch(getCars())
  }, [])
  const handelDelete = (id) => {
    dispatch(deleteCare(id))
  }
  return (
    <div className='w-100 '>
      <div className='title'>
        <h1>List Voitures</h1>
        <Link className='btn btn-outline-primary' to="/voitures/noveau">Nouvelle Voiture</Link>
      </div>
      <div className='w-100'>
        {cars && <Table items={cars} handelDelete={handelDelete} />}
      </div>
    </div>
  )
}
const Table = ({ items, handelDelete }) => {
  return <table className="table">
    <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Im</th>
        <th scope="col">Anne</th>
        <th scope="col">KM</th>
        <th scope="col">Prix</th>
        <th scope="col">Etat</th>
        <th scope="col">Qctions</th>
      </tr>
    </thead>
    <tbody>
      {items.map(e => (
        <tr key={e._id}>
          <td >{e.name}</td>
          <td >{e.matricule}</td>
          <td >{e.matriculeDate}</td>
          <td >{e.speed} KM</td>
          <td >{e.price} MAD</td>
          <td ><CarStatus isDisponible={e.isDisponible} /></td>
          <td ><div className='actions-container'>
            <Link className='btn btn-outline-primary  btn-sm rounded-circle' to={`/voitures/${e._id}/details`}>
              <MdOutlineRemoveRedEye size={20} /></Link>
            <Link className='btn btn-outline-warning  btn-sm rounded-circle' to={`/voitures/${e._id}/modifier`}>
              <CiEdit size={20} /></Link>
            <div>
              <button type="button" className='btn btn-outline-danger  btn-sm rounded-circle' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <PiTrashLight size={20} />
              </button>  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">fermer</button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => handelDelete(e._id)}>supprimer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></td>

        </tr>
      ))}
    </tbody>

  </table>
}
export default List