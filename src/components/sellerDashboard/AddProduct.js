import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/UserContext";

const imageHostKey = process.env.REACT_APP_imagebb_key;

export default function AddProduct() {
    const { user } = useContext(authContext)
    const navigate = useNavigate();
    const { data: CategoriesData = [] } = useQuery({
        queryKey: ['CategoriesData'],
        queryFn: async () => {
            const res = await fetch('https://reseller-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })


    const handleSubmit = e => {
        e.preventDefault();

        const getDate = () => {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            return `${dd}-${mm}-${yyyy}`;
        }

        const form = e.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const category = form.category.value;
        const original_price = form.original_price.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const year = form.year.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const productInfo = {
                        title,
                        desc,
                        original_price,
                        price,
                        category,
                        condition,
                        year,
                        phone,
                        location,
                        image: imgData.data.url,
                        email: user.email,
                        userName : user.displayName,
                        userImg: user.photoURL,
                        date: getDate()
                    }
                    fetch('https://reseller-server.vercel.app/products', {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => {
                            console.log('response complete : ', res);
                            navigate("../my-products")
                            form.reset();
                        })
                        .then(data => console.log(data))
                }
            })

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
                        <textarea name="desc" rows="6" type="text" className="textarea textarea-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered">
                            {
                                CategoriesData.map((category, i) => <option value={i} key={category._id}>{category.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input name="original_price" type="number" className="input input-bordered" />
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
                        <select name="condition" className="select select-bordered">
                            <option>Good</option>
                            <option>excellent</option>
                            <option>fair</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Year of purchase</span>
                        </label>
                        <input name="year" type="number" className="input input-bordered" />
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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product image</span>
                        </label>
                        <input name="image" type="file" className="file-input file-input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add product</button>
                    </div>
                </form>
            </div>
        </div>
    );
}