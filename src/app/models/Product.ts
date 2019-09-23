export interface Product {
    title: string;
    imageUrl: string;
    description: string;
    isAvailable: boolean;
    // price: number;
    // adding ? makes it optional key
    alt?: string;
}



