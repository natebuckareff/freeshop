export interface ShoppingCart {
    id: string;
    items: CartItem[];
}

export interface CartItem {
    id: string;
    productId: string;
    quantity: number;
}
