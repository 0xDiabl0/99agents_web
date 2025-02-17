import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check } from "lucide-react";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectType: z
    .string()
    .min(10, "Please provide a brief description of your project"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
const ADMIN_EMAIL =
  import.meta.env.VITE_ADMIN_EMAIL || "your-email@99agents.ai";

const ContactForm = ({ open = true, onOpenChange }: ContactFormProps) => {
  React.useEffect(() => {
    if (open) {
      document.title = "99 Agents | Contact Us";
    }
  }, [open]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
    },
  });

  const sendEmail = async (data: FormData) => {
    try {
      // Send email to admin
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: ADMIN_EMAIL,
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          message: data.projectType,
          reply_to: data.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      // Send confirmation email to user
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: data.email,
          from_name: "99 Agents",
          message: `Thank you for reaching out! We've received your inquiry about:

${data.projectType}

We'll get back to you within 24 hours to discuss your AI project requirements.`,
          reply_to: ADMIN_EMAIL,
        },
        EMAILJS_PUBLIC_KEY,
      );

      return true;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const success = await sendEmail(data);
      if (success) {
        setIsSubmitted(true);
      } else {
        // Handle error
        alert("Failed to send message. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] bg-white dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
            <DialogTitle className="text-2xl font-bold">Thank You!</DialogTitle>
            <DialogDescription className="max-w-sm">
              We've received your message and will get back to you within 24
              hours to discuss your AI project requirements. We've sent you a
              confirmation email as well.
            </DialogDescription>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                onOpenChange?.(false);
              }}
              className="mt-6"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription>
            Tell us about your AI project needs and we'll get back to you within
            24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...form.register("phone")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectType">
                What type of AI work are you looking for?
              </Label>
              <Textarea
                id="projectType"
                placeholder="Brief description of your project or requirements..."
                className="min-h-[120px]"
                {...form.register("projectType")}
              />
              {form.formState.errors.projectType && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.projectType.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
