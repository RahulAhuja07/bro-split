import { inngest } from "@/lib/inngest/client";
import { paymentReminders } from "@/lib/inngest/payment-reminders";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    paymentReminders
  ],
});