"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "@/lib/helpers/form-helpers";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import axiosInstance from "@/lib/helpers/axiosInterceptors";
import { EndPoints } from "@/lib/constants";
import { useToast } from "../ui/use-toast";
import { processError } from "@/lib/helpers";
import ButtonLoader from "../loaders/ButtonLoader";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.post(EndPoints.LOGIN, values);
      console.log("data: ", data);
      router?.replace("/");
    } catch (error: any) {
      toast({
        description: processError(error),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full sm:w-4/5 mt-8 flex flex-col gap-y-4"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{loading ? <ButtonLoader /> : "Login"}</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
