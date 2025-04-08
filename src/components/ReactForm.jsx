import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "react-hot-toast";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be atleast 3 characters" })
    .max(20, { message: "First name must be less than 20 characters" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be atleast 3 characters" })
    .max(20, { message: "Last name must be less than 20 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z
    .string()
    .min(10, { message: "Contact must be at least 10 digits" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  subjects: z
    .object({
      english: z.boolean(),
      maths: z.boolean(),
      physics: z.boolean(),
    })
    .refine((data) => Object.values(data).some(Boolean), {
      message: "Please select at least one subject",
    }),
  resume: z.any().refine((files) => files?.length === 1, {
    message: "Please upload a file",
  }),
  url: z.string().url({ message: "Enter a valid URL" }),
  selectedOption: z.string().min(1, { message: "Please select a level" }),
  about: z
    .string()
    .min(50, { message: "Please write at least 50 characters about yourself" }),
});

const ReactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subjects: {
        english: false,
        maths: false,
        physics: false,
      },
      resume: null,
      url: "",
      selectedOption: "",
      about: "",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = form;

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success("Form submitted successfully", { duration: 4000 });
      // Reset the form after successful submission
      reset({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        subjects: {
          english: false,
          maths: false,
          physics: false,
        },
        resume: null,
        url: "",
        selectedOption: "",
        about: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully", data);
  };

  return (
    <div className="w-full py-8 bg-[#212121] text-white p-4 rounded-lg">
      <Toaster position="top-center" reverseOrder={false} />
      <Form {...form}>
        <h1 className="flex justify-center pb-6 text-4xl font-bold">
          React form
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 max-w-lg mx-auto p-6 border rounded-lg shadow-xl"
        >
          {/* First Name */}
          <FormField
            name="firstName"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last name */}
          <FormField
            name="lastName"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Contact */}
          <FormField
            name="contact"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender */}
          <FormField
            name="gender"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subjects */}
          <FormField
            name="subjects"
            control={control}
            render={() => (
              <FormItem>
                <FormLabel>Best Subjects</FormLabel>
                <div className="flex gap-4">
                  {["english", "maths", "physics"].map((subject) => (
                    <FormField
                      key={subject}
                      name={`subjects.${subject}`}
                      control={control}
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <FormLabel className="font-normal capitalize">
                            {subject}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage>
                  {form.formState.errors.subjects?.message?.toString()}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Resume */}
          <FormField
            name="resume"
            control={control}
            render={({ field }) => (
              <FormItem className=''>
                <FormLabel>Upload Resume</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* URL */}
          <FormField
            name="url"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website/Portfolio URL</FormLabel>
                <FormControl>
                  <Input type="url" placeholder="Enter URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Level */}
          <FormField
            name="selectedOption"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choose Your Level</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Beginner</SelectItem>
                      <SelectItem value="2">Intermediate</SelectItem>
                      <SelectItem value="3">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* About */}
          <FormField
            name="about"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>About You</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write about yourself" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReactForm;
