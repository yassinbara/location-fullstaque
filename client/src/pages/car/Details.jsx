import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteCare, getCarByid } from '../../redux/api/car'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'


const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navgite = useNavigate()
    const { car } = useSelector(state => state.car)
    useEffect(() => {
        dispatch(getCarByid(id))
    }, [id, dispatch])
    const handelDelete = (id) => {
        dispatch(deleteCare(id, () => navgite(-1)))
    }
    return (
        <div>
            {car && <>
                <div className='car-details-header'>
                    <h1>detaile</h1>
                    <div className='car-details-actions'>
                        <Link className='btn btn-outline-warning  btn-sm' to={`/voitures/${id}/modifier`}>
                            Edite</Link>
                        <div>
                            <button type="button" className='btn btn-outline-danger  btn-sm ' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Supruimer
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
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => handelDelete(id)}>supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details-content'>
                    <div className='detail-wrapperr'>
                       <b>immatricule :</b> 
                       <span> {car.matricule}</span> 
                       
                    </div>
                    <div className='detail-wrapperr'>
                       <b>Anne immatricule :</b> 
                       <span> {new Date(car.matriculeDate).getFullYear().toString()}</span> 
                       
                    </div>
                    <div className='detail-wrapperr'>
                       <b>kilometrage :</b> 
                       <span> {car.speed} KM</span> 
                       
                    </div>
                    <div className='detail-wrapperr'>
                       <b>Cout de location / jour :</b> 
                       <span> {car.price}</span> 
                       
                    </div>
                </div></>}
        </div>
    )
}

export default Details