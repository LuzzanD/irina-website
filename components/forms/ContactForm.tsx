"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import router from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  text: z.string().min(50, {
    message: "Explanation of the question must be at least 50 characters.",
  }),
});

const ContactForm = () => {
  const [editorOpen, setEditorOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    setEditorOpen(false);
  };

  const handleEditorOpen = () => {
    setEditorOpen((prevValue) => !prevValue);
  };

  return (
    <div className="flex flex-col items-center w-full px-16">
      <div className="flex items-center gap-8">
        <div className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-900"></div>
        <Button
          className="mt-6 rounded-none tracking-[6px] font-semibold items-center flex justify-center py-7 px-12 text-[18px] border-[3px] hover:text-slate-100 border-slate-900 text-slate-900 bg-transparent"
          onClick={handleEditorOpen}
        >
          {editorOpen ? "CLOSE" : "GET IN TOUCH"}
        </Button>
      </div>
      {editorOpen && (
        <div className="w-full mt-16 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full flex flex-col items-center"
            >
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem className="w-full mb-8">
                    <FormControl className="w-full flex flex-wrap gap-8 justify-center">
                      <div className="flex flex-wrap gap-8">
                        <Input
                          placeholder="IME I PREZIME"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                        <Input
                          placeholder="EMAIL"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                        <Input
                          placeholder="TELEFON"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                        <Select>
                          <SelectTrigger className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1">
                            <SelectValue placeholder="STATUS LICA" />
                          </SelectTrigger>
                          <SelectContent className="rounded-none">
                            <SelectGroup>
                              <SelectItem
                                value="pravno-lice"
                                className="font-semibold"
                              >
                                PRAVNO LICE
                              </SelectItem>
                              <SelectItem
                                value="fizicko-lice"
                                className="font-semibold"
                              >
                                FIZICKO LICE
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="VRSTA USLUGE"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                        <Input
                          placeholder="IME FIRME"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                        <Input
                          placeholder="PIB"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                        <Input
                          placeholder="ADRESA"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                        <Textarea
                          placeholder="PORUKA"
                          className="w-[45%] bg-transparent text-zinc-900 font-bold border-t-0 border-l-0 border-r-0 rounded-none border-zinc-900 border-b-1"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="rounded-none tracking-[6px] font-semibold items-center flex justify-center py-7 px-12 text-[18px] border-[3px] hover:text-slate-100 border-slate-900 text-slate-900 bg-transparent"
              >
                SEND
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
