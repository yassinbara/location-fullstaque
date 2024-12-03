import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCar } from '../../redux/api/car'
import { carAction } from '../../redux/slices/carSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { errorValidation } = useSelector(state => state.car)
    const [formData, setFormData] = useState({
        name: '',
        matricule: '',
        matriculeDate: '',
        speed: '',
        price: '',
        isDisponible: true,
    })
    const handelCahnge = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }
    const handelSubmit = e => {
        e.preventDefault()
        dispatch(createCar(formData, () => navigate(-1)))
    }
    useEffect(() => {
        dispatch(carAction.setErrorValidation(null))
    }, [])
    return (
        <div className='w-100'>
            <h1>Nouvelle Voiture</h1>
            <form onSubmit={handelSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="name" aria-describedby="name" value={formData.name} onChange={e => handelCahnge('name', e.target.value)} />
                    {/* <div id="name" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className='inputsWrapper'>
                    <div class="mb-3">
                        <label for="matricule" class="form-label">Immatricule</label>
                        <input type="text" class="form-control" id="matricule" aria-describedby="matricule" value={formData.matricule} onChange={e => handelCahnge('matricule', e.target.value)} />
                        {/* <div id="matricule" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="matriculeDate" class="form-label">Annee d'immatriculation</label>
                        <input type="number" class="form-control" id="matriculeDate" aria-describedby="matriculeDate" value={formData.matriculeDate} onChange={e => handelCahnge('matriculeDate', e.target.value)} />
                        {/* <div id="matricule" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                </div>
                <div className='inputsWrapper'>
                    <div class="mb-3">
                        <label for="speed" class="form-label">Km</label>
                        <input type='number' class="form-control" id="speed" aria-describedby="speed" value={formData.speed} onChange={e => handelCahnge('speed', e.target.value)} />
                        {/* <div id="speed" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Prixe</label>
                        <input type='number' class="form-control" id="price" aria-describedby="price" value={formData.price} onChange={e => handelCahnge('price', e.target.value)} />
                        {/* <div id="price" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                </div>

                {errorValidation && <div className='error'
                >{errorValidation?.map((e, i) => (
                    <span> -{i + 1} {e.message} </span>
                ))}
                </div>}

                <button type="submit" class="btn btn-success">Ajouter</button>
            </form>
        </div>
    )
}

export default Create