import { TypeFees } from "../types/TypeFees";

export const fees: TypeFees[] = [
    { origin: 11, destination: 16, price: 1.93 },
    { origin: 11, destination: 17, price: 1.85 },
    { origin: 11, destination: 18, price: 1.77 },

    { origin: 16, destination: 11, price: 2.69 },
    { origin: 16, destination: 17, price: 2.53 },
    { origin: 16, destination: 18, price: 2.45 },

    { origin: 17, destination: 11, price: 1.37 },
    { origin: 17, destination: 16, price: 1.29 },
    { origin: 17, destination: 18, price: 1.13 },

    { origin: 18, destination: 11, price: 2.35 },
    { origin: 18, destination: 16, price: 2.27 },
    { origin: 18, destination: 17, price: 2.19 },
];