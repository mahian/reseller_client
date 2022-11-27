import React, { useContext } from 'react';

const BookingModal = ({info}) => {
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
                        <input type="text" value={info?.date} disabled className="input input-bordered w-full mt-3" />
                        {/* <input type="text" defaultValue={user?.displayName} name='name' placeholder="name" className="input input-bordered w-full mt-3" /> */}
                        {/* <input type="email" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered w-full mt-3" /> */}
                        <input type="number" name='phone' placeholder="phone" className="input input-bordered w-full mt-3" />
                        <button className="btn w-full mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;