import { PRODUCTS } from '@models/product';
import { ShoppingCart } from '@models/shopping-cart';
import { produce } from 'immer';
import { nanoid } from 'nanoid';
import { useCallback } from 'react';
import { useLocalStorage } from './use-local-storage';

export type ShoppingCartAction =
    | { type: 'ADD_TO_CART'; productId: string; quantity: number }
    | { type: 'SET_ITEM_QUANTITY'; itemId: string; quantity: number }
    | { type: 'REMOVE_FROM_CART'; itemId: string };

const getInitialShoppingCart = (): ShoppingCart => ({
    id: nanoid(),
    items: [],
});

export const shoppingCartReducer = (state: ShoppingCart, action: ShoppingCartAction) =>
    produce(state, draft => {
        switch (action.type) {
            case 'ADD_TO_CART': {
                const product = PRODUCTS[action.productId];
                if (product === undefined) {
                    throw Error('Product not found');
                }
                draft.items.push({
                    id: nanoid(),
                    productId: product.id,
                    quantity: action.quantity,
                });
                break;
            }

            case 'SET_ITEM_QUANTITY': {
                const itemIndex = state.items.findIndex(x => x.id === action.itemId);
                if (itemIndex < 0) {
                    throw Error('Item not found');
                }
                draft.items[itemIndex].quantity = action.quantity;
                break;
            }

            case 'REMOVE_FROM_CART': {
                const itemIndex = state.items.findIndex(x => x.id === action.itemId);
                if (itemIndex < 0) {
                    throw Error('Item not found');
                }
                draft.items.splice(itemIndex, itemIndex);
                break;
            }
        }
    });

export const useShoppingCart = () => {
    const [state, setState] = useLocalStorage<ShoppingCart>(
        'shopping-cart',
        getInitialShoppingCart
    );

    const dispatch = useCallback(
        (action: ShoppingCartAction) => {
            setState(x => shoppingCartReducer(x, action));
        },
        [setState]
    );

    return [state, dispatch] as const;
};
