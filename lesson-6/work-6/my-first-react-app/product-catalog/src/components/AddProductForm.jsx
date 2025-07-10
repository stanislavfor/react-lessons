// my-first-react-app/product-catalog/src/components/AddProductForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productsSlice';

export default function AddProductForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: '', description: '', price: '', available: true });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ ...form, price: parseFloat(form.price) }));
        setForm({ name: '', description: '', price: '', available: true });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Название" value={form.name} onChange={handleChange} />
            <input name="description" placeholder="Описание" value={form.description} onChange={handleChange} />
            <input name="price" type="number" placeholder="Цена" value={form.price} onChange={handleChange} />
            <label>
                <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
                В наличии
            </label>
            <button type="submit">Добавить</button>
        </form>
    );
}