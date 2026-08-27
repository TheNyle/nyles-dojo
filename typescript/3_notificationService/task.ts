export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  total: number;
}

/**
 * External dependency: retrieves order data.
 * You cannot modify this interface — mock it in your tests.
 */
export interface OrderRepository {
  findById(orderId: string): Order | null;
}

/**
 * External dependency: retrieves customer notification preferences.
 * You cannot modify this interface — mock it in your tests.
 */
export interface CustomerPreferences {
  getPreferences(customerId: string): { channel: "email" | "sms" } | null;
}

/**
 * External dependency: renders message templates.
 * You cannot modify this interface — mock it in your tests.
 */
export interface TemplateEngine {
  render(templateName: string, data: Record<string, string>): string;
}

/**
 * External dependency: sends notifications via email or SMS.
 * You cannot modify this interface — mock it in your tests.
 */
export interface NotificationSender {
  sendEmail(to: string, subject: string, body: string): void;
  sendSms(to: string, body: string): void;
}
