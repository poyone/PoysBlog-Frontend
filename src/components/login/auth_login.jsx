"use client"

import Cookies from 'js-cookie';
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { LoginAdmin } from "@/lib/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import useShowToast from '../ui/show_toast';
import { PasswordInput } from "../ui/password_input";
export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export const iframeHeight = "600px";

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-4";

const UserSchema = z.object({
  username: z.string().min(4, {
    message: "Title must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Title must be at least 6 characters.",
  }),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const showToast = useShowToast();
  const router = useRouter()
  async function onSubmit(data) {
    try {
      const resDetails = await LoginAdmin(data);
// itisapassword
      if (resDetails.state) {
        showToast("Login Successful",resDetails.detail.token_type, true);
        Cookies.set('token', resDetails.detail.access_token)
        router.push('/admin')
      } else {
        showToast("Login Failed", resDetails.detail, false);
      }
    } catch (error) {
      showToast("Error", error, false);
    }
  }
  return (
    <Form {...form}>
      <div className=" w-96 mx-auto p-6 border border-black rounded">
        <p className="font-semibold tracking-tight text-2xl p-3">Login</p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 pt-2 px-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className>User Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Login
          </Button>
        </form>
      </div>
    </Form>
  );
}
