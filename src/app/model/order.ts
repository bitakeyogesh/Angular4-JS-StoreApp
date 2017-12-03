import { CartItem } from "./cart.service";


export class Order {

    public cartItems : Array<CartItem>;

    constructor(public id?: number,
        public name?: string,
        public address?: string,
        public contactno?: number) { }
}