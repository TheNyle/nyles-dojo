/**
 * External dependency: a movie catalogue (e.g., a database or third-party API).
 * You cannot modify this interface — mock it in your acceptance tests.
 */
export interface MovieCatalogue {
  findByTitle(
    title: string
  ): Promise<{
    title: string;
    type: "NewRelease" | "Regular" | "Children";
  } | null>;
  checkOut(title: string): Promise<void>;
  checkIn(title: string): Promise<void>;
}

/**
 * External dependency: a customer database.
 * You cannot modify this interface — mock it in your acceptance tests.
 */
export interface CustomerRepository {
  findById(id: string): Promise<{ id: string; name: string } | null>;
}
