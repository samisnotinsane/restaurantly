export class Restaurant {
    id: string;
    name: string;
    rating: string;
    category: string;
    address: string;
    url: string;

    constructor(id: string, name: string, rating: string, 
        category: string, address: string, url: string) {

        this.id = id;
        this.name = name;
        this.rating = rating;
        this.category = category;
        this.address = address;
        this.url = url;
    }
}