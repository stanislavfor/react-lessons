// my-first-react-app/product-catalog/src/components/EditProductForm.jsx
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/products/productsSlice';
import { useState } from 'react';


export default function EditProductForm({ product, onClose }) {
    const [form, setForm] = useState({ ...product });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ ...form, price: parseFloat(form.price) }));
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} />
            <input name="description" value={form.description} onChange={handleChange} />
            <input name="price" type="number" value={form.price} onChange={handleChange} />
            <label>
                <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
                В наличии
            </label>
            <button type="submit">Сохранить</button>
        </form>
    );
}