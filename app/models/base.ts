export enum FiltersKeys {
    MODEL = 'model',
    MAKE = 'make',
    LOCATION = 'location',
    YEAR = 'year',
    PRICE = 'price',
    CATEGORY = 'category',
}

export interface Filters {
    name: FiltersKeys.MODEL | FiltersKeys.MAKE | FiltersKeys.LOCATION | FiltersKeys.YEAR | FiltersKeys.PRICE | FiltersKeys.CATEGORY;
    value: Base[]
}


export interface Base {
    id: number;
    name: string;
}
