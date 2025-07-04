import {CustomerRepo, Inventory, MovieSystem, Payments, rentAMovie} from "./task";

describe("Template", () => {
    test("I want to rent a movie and get a receipt", () => {

        const mockCustomerRepo = new CustomerRepo();
        const mockMovieSystem = new MovieSystem();
        const mockPaymentsSystem = new Payments();
        const mockInventorySystem = new Inventory();


        const expectedReceipt = {
            customerName: "Steve",
            movieTitle: "F1",
            rentalDate: expect.any(Date),
            dueDate: expect.any(Date),
            price: expect.any(Number),
        }

        const id = 123
        const movieName = "F1"

        expect(rentAMovie({id, movieName}, {
            customer: mockCustomerRepo,
            movie: mockMovieSystem,
            payments: mockPaymentsSystem,
            inventory: mockInventorySystem
        })).toEqual(expectedReceipt);
    });
});
