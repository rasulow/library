"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"



import { SearchSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { useAppContext } from "@/context";
import axiosInstance from "@/utils/axiosInstance";


const SearchForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [books, setBooks] = useState([])
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const {
    toggleUp
  } = useAppContext()


  const form = useForm({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      author: "",
      book: "",
      genre: "",
      lang: "",
    },
  });


  const onSubmit = async (data) => {
    console.log(data)
    try {
      setLoading(true);
      const headers = {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        };
      const response = await axiosInstance.get(
          `/api/books/?author=${data.author}&genre=${data.genre}&search=${data.book}&language=${data.lang}`,
          {
              headers: headers
            }
      );
      setBooks(response.data.results);
      setCount(response.data.count);
      reset();
      //next bilen previous galdy
  } catch (err) {
      setError(err);
      console.log(error)
  } finally {
      setLoading(false);
      setToggle(true)
    }
  };

  const  allBooks = books?.map(book => {
    return (
      <Link 
          href={`/genre/${book.id}`} 
          className='font-semibold'
          onClick={()=> setToggleLeft(false)}
      >
          {book.name}
      </Link>
    )
  })  

  const { pending } = useFormStatus();
  return (
    <>
    
    {(!toggle) ?  (<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Awtor</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="username"
                    placeholder="Awtoryň adyny giriziň"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="book"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ady</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="username"
                    placeholder="Kitabyň adyny giriziň"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Žanry</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="username"
                    placeholder="Žanryny giriziň"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lang"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dili</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-slate-300">
                      <SelectValue placeholder="Dili saýlaň" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-300">
                    <SelectItem value="Türkmen">Türkmen</SelectItem>
                    <SelectItem value="Iňlis">Iňlis</SelectItem>
                    <SelectItem value="Rus">Rus</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-gray-300" disabled={pending}>
          {loading ? "Loading..." : "Gözle"}
        </Button>
      </form>
    </Form>) : (
      <>
        {(allBooks[0]) ? (<div className={toggleUp ? "flex flex-col h-[76vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll" : "flex flex-col h-[82vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll"} >
          {allBooks}
      </div>) : 
      (<div className="font-bold">
        <div>Siziň gözleýän kitabyňyz tapylmady</div>
      </div>)}
      </>)}
    </>
    
  );
};

export default SearchForm;
