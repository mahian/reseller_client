import React, { useContext } from 'react';
import { authContext } from '../../context/UserContext';

const BookingModal = ({info}) => {
    const {user} = useContext(authContext);

    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        return `${dd}-${mm}-${yyyy}`;
    }
    const date = getDate();

    const handleSubmit = ()=>{
        console.log('modal submit');
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{info?.title}</h3>
                    <form onSubmit={handleSubmit} className='mt-5'>
                        <p>Price : {info?.price}</p>
                        <input type="text" value={date} disabled className="input input-bordered w-full mt-3" />
                        <input type="text" defaultValue={user?.displayName} disabled name='name' placeholder="name" className="input input-bordered w-full mt-3" />
                        <input type="email" defaultValue={user?.email} disabled name='email' placeholder="email" className="input input-bordered w-full mt-3" />
                        <input type="number" name='phone' placeholder="phone" className="input input-bordered w-full mt-3" />
                        <input type="number" name='meet_location' placeholder="Meeting Location" className="input input-bordered w-full mt-3" />
                        <button className="btn w-full mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;