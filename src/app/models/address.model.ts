export class AddressModel {
    id: string;
    name: string;

    constructor(address: Address) {
        this.id = address.id;
        this.name = address.name;
    }
}

export interface Address {
    id: string;
    name: string;
}
