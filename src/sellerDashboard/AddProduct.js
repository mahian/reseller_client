export default function AddProduct() {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const formData = {
            title,
            desc,
            price,
            condition,
            phone,
            location,
        }
        console.log(formData);
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => {
            console.log('response complete : ', res);
            form.reset();
        })
        .then(data => console.log(data))
    }

    return (
        <div className='container px-3 mx-auto my-10'>
            <div className="card w-full">
                <h2 className="text-2xl font-bold">Add a product</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input name="title" type="text" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input name="desc" type="text" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="number" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input name="condition" type="text" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input name="phone" type="number" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name="location" type="address" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add product</button>
                    </div>
                </form>
            </div>
        </div>
    );
}