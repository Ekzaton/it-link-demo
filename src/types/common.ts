export type Item = {
    id?: number,
    images: string[],
    name: string,
    description: string,
    price: number,
    contacts: string,
    technical_characteristics?: {
        brand: string,
        model: string,
        production_year: number,
        body: string,
        mileage: number
    },
    options: {
        option_name: string,
    }[]
}

export type AppFormData = {
    id?: number,
    name: string,
    description: string,
    price: string,
    contacts: string,
    images: string;
    technical_characteristics?: {
        brand: string,
        model: string,
        production_year: string,
        body: string,
        mileage: string
    };
    options: {
        option_name: string,
    }[];
}
