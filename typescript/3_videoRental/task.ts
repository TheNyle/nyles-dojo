interface Customer { //entity
    id: number
    name: string
}

interface Movie { //value object
    id: number
    name: string
    type: MovieType
    genre: string
    ageRating: string
}

type MovieType = 'NEW' | 'REGULAR' | 'CHILDREN'

interface InventoryLevel {
    id: number,
    movieId: number,
    stockLevel: number
}

interface PaymentReceipt {
    customerName: string,
    movieTitle: string,
    rentalDate: Date,
    dueDate: Date,
    price: number,
}

export class CustomerRepo {
    constructor() {
    }

    getCustomerById(id: number): Customer {
        return {
            id: 1,
            name: "Steve"
        }
    }
}

export class MovieSystem {
    constructor() {
    }

    getMovieByName(name: string): Movie {
        return {
            ageRating: "PG", genre: "sports", name: "F1", type: 'NEW',
            id: 1
        }
    }
}

export class Payments {

    constructor() {
    }

    private movieTypeToPrice: Record<MovieType, number> = {
        'NEW': 3,
        'REGULAR': 2,
        'CHILDREN': 1.5
}

    getPriceByMovieType(movieType: MovieType): number {
        return 1
    }

    generateReceipt(customer: Customer, movie: Movie): PaymentReceipt | null {
        return {
            customerName: "Steve",
            movieTitle: "F1",
            rentalDate: new Date(),
            dueDate: new Date(),
            price: 40,
        }
    }
}

export class Inventory {
    constructor() {
    }

    getStockByMovieId(movieId: number): InventoryLevel | null {
        return null
    }

    depleteInventory(movieId: number, count: number): InventoryLevel | null {
        return null
    }
}


// params, deps
type RentAMovieParams =  {
    id: number;
    movieName: string;
}

type RentAMovieDependencies = {
    customer: CustomerRepo;
    movie: MovieSystem;
    payments: Payments
    inventory: Inventory;
}

export const rentAMovie = (params: RentAMovieParams, deps: RentAMovieDependencies) => {

    const customer = deps.customer.getCustomerById(params.id);
    const movie = deps.movie.getMovieByName(params.movieName);
    // todo: check for inventory
    // todo: deplete inventory
    return deps.payments.generateReceipt(customer, movie)
}