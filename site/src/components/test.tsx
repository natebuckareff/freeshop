import { useShoppingCart } from '@hooks/use-shopping-cart';
import { PRODUCTS } from '@models/product';
import React, { FC, useCallback, useState } from 'react';

const options = Object.keys(PRODUCTS);

export const Test: FC = () => {
    const [state, dispatch] = useShoppingCart();
    const [productId, setProductId] = useState<string | null>(null);

    const handleAddClick = useCallback(() => {
        if (productId !== null) {
            dispatch({ type: 'ADD_TO_CART', productId: productId, quantity: 1 });
        }
    }, [dispatch, productId]);

    const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductId(e.target.value);
    }, []);

    return (
        <>
            <pre>{JSON.stringify(state, null, 2)}</pre>

            <select value={productId ?? ''} onChange={handleSelectChange}>
                <option value={''} disabled></option>

                {options.map(id => (
                    <option key={id} value={id}>
                        {id}
                    </option>
                ))}
            </select>

            <button disabled={productId === null} onClick={handleAddClick}>
                add
            </button>
        </>
    );
};
