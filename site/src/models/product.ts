import { Currency } from './currency';

export interface Product {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    price: Currency;
}

export const PRODUCTS: Partial<Record<string, Product>> = {
    product_1000: {
        id: 'product_1000',
        title: 'Some Product',
        description: 'Something something something',
        imageSrc: 'photo-1662226572816-45762acddd81.jpeg',
        imageAlt: 'Some random photo',
        price: Currency.from('25.05'),
    },
    product_2000: {
        id: 'product_2000',
        title: 'Some Product',
        description: 'Something something something',
        imageSrc: 'photo-1662829138009-625bd8709f53.jpeg',
        imageAlt: 'Some random photo',
        price: Currency.from('15.11'),
    },
    product_3000: {
        id: 'product_3000',
        title: 'Some Product',
        description: 'Something something something',
        imageSrc: 'photo-1662998367901-545c814e688c.jpeg',
        imageAlt: 'Some random photo',
        price: Currency.from('13.51'),
    },
    product_5000: {
        id: 'product_5000',
        title: 'Some Product',
        description: 'Something something something',
        imageSrc: 'photo-1663004536868-1658c44ffb12.jpeg',
        imageAlt: 'Some random photo',
        price: Currency.from('3.1'),
    },
};
