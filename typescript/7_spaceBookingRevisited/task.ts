/**
 * External service: checks whether a passenger is medically cleared for space flight.
 * You cannot control this implementation.
 */
export interface MedicalClearanceService {
  checkClearance(passengerId: string): boolean;
}

/**
 * External service: processes payments and refunds.
 * You cannot control this implementation.
 */
export interface PaymentGateway {
  charge(passengerId: string, amount: number): { success: boolean; transactionId: string };
  refund(transactionId: string, amount: number): { success: boolean };
}

/**
 * External service: sends notifications to passengers.
 * You cannot control this implementation.
 */
export interface NotificationService {
  sendBookingConfirmation(passengerId: string, flightId: string, details: string): void;
  sendCancellationNotice(passengerId: string, flightId: string): void;
  sendWaitlistOffer(passengerId: string, flightId: string): void;
}
