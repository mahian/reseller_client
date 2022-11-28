import React, { useContext } from 'react';
import { authContext } from '../../context/UserContext';

const BookingModal = ({product, setProduct}) => {
    const {user} = useContext(authContext);
    const {title, _id, price} = product;

    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        return `${dd}-${mm}-${yyyy}`;
    }
    const date = getDate();

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const buyer = form.buyer.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meet_location = form.meet_location.value;

        const orderInfo = {
            _id,
            title,
            price,
            date,
            buyer,
            email,
            phone,
            meet_location
        }

        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
        .then(res => {
            console.log(res);
        })
        .then(data => console.log(data))
        console.log(orderInfo);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleSubmit} className='mt-5'>
                        <p>Price : {price}</p>
                        <input type="text" name='date' defaultValue={date} disabled className="input input-bordered w-full mt-3" />
                        <input type="text" defaultValue={user?.displayName} disabled name='buyer' placeholder="name" className="input input-bordered w-full mt-3" />
                        <input type="email" defaultValue={user?.email} disabled name='email' placeholder="email" className="input input-bordered w-full mt-3" />
                        <input type="number" name='phone' placeholder="phone" className="input input-bordered w-full mt-3" />
                        <input type="text" name='meet_location' placeholder="Meeting Location" className="input input-bordered w-full mt-3" />
                        <button className="btn btn-primary w-full mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;