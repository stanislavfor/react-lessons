// my-first-react-app/product-catalog/src/components/ProductList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../features/products/productsSlice';
import { useState } from 'react';
import EditProductForm from './EditProductForm';

export default function ProductList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [editingProduct, setEditingProduct] = useState(null);

    return (
        <div>
            <h2>Каталог</h2>
            {products.map(product => (
                <div key={product.id}>
                    <p><strong>{product.name}</strong></p>
                    <p>{product.description}</p>
                    <p>Цена: {product.price} ₽</p>
                    <p>В наличии: {product.available ? 'Да' : 'Нет'}</p>
                    <button onClick={() => dispatch(toggleAvailability(product.id))}>Сменить статус</button>
                    <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
                    <button onClick={() => setEditingProduct(product)}>Редактировать</button>

                    {/* Форма редактирования */}
                    {editingProduct?.id === product.id && (
                        <EditProductForm
                            product={editingProduct}
                            onClose={() => setEditingProduct(null)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}