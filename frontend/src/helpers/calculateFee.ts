import { TypeFees } from './../types/TypeFees';

export const calculateFee = (origin: number, destination: number, plan: number, minutes: number, fees: TypeFees[]) => {

    let fee = fees.find(fee => fee.origin === origin && fee.destination === destination);

    let surplus = minutes % plan;

    let result = fee && minutes > plan ? ((minutes * fee.price) - (plan * fee.price)) + (plan !== 0 ? ((10 * fee.price) / 100) * surplus : 0) : 0;

    return result;
} 