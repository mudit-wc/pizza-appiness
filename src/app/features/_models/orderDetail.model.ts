export class OrderDetail {
    id: number;
    customerName: string;
    itemsName: Items[]
    address: string;
    totalAmmountOfOrder: string;
}

export class Items {
    item: string;
    cost: string;
}