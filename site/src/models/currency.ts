export interface Currency {
    readonly CAD: unique symbol;
    amount: number;
}

const INTEGER_PATTERN = /^[0-9]+$/;

export namespace Currency {
    export function from(value: string): Currency;
    export function from(value: number): Currency;
    export function from(value: string | number): Currency {
        if (typeof value === 'string') {
            const parts = value.split('.');
            if (parts.length === 0) {
                const p = parts[0];
                if (!INTEGER_PATTERN.test(p)) throw Error(`Invalid currency value: ${value}`);
                return { amount: +p * 100 } as Currency;
            } else if (parts.length === 2) {
                const [a, b] = parts;
                if (!INTEGER_PATTERN.test(a)) throw Error(`Invalid currency value: ${value}`);
                if (!INTEGER_PATTERN.test(b)) throw Error(`Invalid currency value: ${value}`);
                return { amount: +a * 100 + +b } as Currency;
            } else {
                throw Error(`Invalid currency value: ${value}`);
            }
        } else {
            return { amount: value * 100 } as Currency;
        }
    }

    export const stringify = (value: Currency): string => {
        const dollars = Math.floor(value.amount / 100);
        const cents = value.amount - dollars * 100 + '';
        const pad = 2 - cents.length;
        return `${dollars}.${'0'.repeat(pad) + cents}`;
    };
}
