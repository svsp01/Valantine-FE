"use client"
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import heart from "../../../public/decoration.png";
import Image from 'next/image';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useParams } from 'next/navigation';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';
import * as userService from "../../services/users/UserServices";

function UserOnboardComponent() {
    const [activeRadio, setActiveRadio] = useState("")
    const [inviterName, setInviterName] = useState("")
    const numbers = Array.from({ length: 79 }, (_, index) => index + 12);
    const {id}  = useParams()
useEffect(()=>{
    if(id){
        userService.GetUserByID(id)
            .then((response) => {
                console.log('userbyID:', response);
                setInviterName(response.name)
            })
            .catch((error) => {
                console.error('Error creating user:', error);
            });
    }
},[id])
    
    const router: any = useRouter()
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        age: z.string().min(1, {
            message: "Age is required",
        }),
        gender: z.string().min(1, {
            message: "Gender is required",
        }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            age: "",
            gender: ""
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(' User:', values);
        router.push(`/user/65b66cc80229095f3c7ca570/puzzle`);
        if(id){
            router.push(`/user/${(id)}/65b66cc80229095f3c7ca570/puzzle`);
        }
        // userService.CreateUser(values)
        //     .then((response) => {
        //         console.log('New User:', response);
        //         if(id){
        //             router.push(`/user/${(id)}/${response?._id}/puzzle`);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error creating user:', error);
        //     })
        console.log(values)
    }
    return (
        <div className=" flex px-10 items-center justify-center min-h-screen bg-black text-white text-center p-8 font-sacramento relative">
            <div>
                <h1 className="text-xl md:text-5xl lg:text-6xl text-left font-extrabold mb-4 relative z-10">
                {  inviterName !== "" ?  
                    <span className="bg-gradient-to-r w-full text-wrap text-transparent bg-clip-text from-pink-500 to-red-500 ">Play with {inviterName}!</span>
                :<span className="bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-red-500 ">Welcome to Love Game!</span>

                }
                </h1>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"

                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='text'
                                            placeholder='Your Name'
                                            className='text-black  focus-visible:ring-0 focus:shadow-none placeholder:text-black bg-white bg-opacity-40 border-none rounded-md py-8 focus:outline-none focus:ring focus:border-pink-300'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <RadioGroup onValueChange={(value) => {
                                            form.setValue("gender", value);
                                            console.log(value);
                                            setActiveRadio(value);
                                        }} >
                                            <div className='flex flex-wrap  md:flex-nowrap text-wrap w-full justify-between px-10 py-4 '>
                                                <div className='w-full flex items-center pb-4 md:pb-0'>
                                                    <RadioGroupItem value="male" id="male" className='text-white text-2xl' />
                                                    <Label htmlFor="male" className='cursor-pointer mx-3 text-xl' >Male</Label>
                                                </div>
                                                <div className='w-full flex items-center pb-4 md:pb-0'>
                                                    <RadioGroupItem value="female" id="female" className='text-white ' />
                                                    <Label htmlFor="female" className='cursor-pointer mx-3 text-xl' >Female</Label>
                                                </div>
                                                <div className='w-full flex items-center pb-4 md:pb-0'>
                                                    <RadioGroupItem value="others" id="others" className='text-white ' />
                                                    <Label htmlFor="others" className='cursor-pointer mx-3 text-xl' >Others</Label>
                                                </div>
                                            </div>
                                        </RadioGroup>


                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Age</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={(e: any) =>
                                            form.setValue("age", e)
                                        } >
                                            <SelectTrigger className="w-full text-black  focus-visible:ring-0 focus:shadow-none placeholder:text-black bg-white bg-opacity-40 border-none rounded-md py-8 focus:outline-none focus:ring focus:border-pink-300">
                                                <SelectValue placeholder="Age" />
                                            </SelectTrigger>
                                            <SelectContent className="w-full h-56 p-0 text-black  focus-visible:ring-0 focus:shadow-none placeholder:text-black bg-white bg-opacity-70 border-none rounded-md py-8 focus:outline-none focus:ring focus:border-pink-300">
                                                {numbers.map((number: any) =>
                                                    <SelectItem key={number} value={`${number}`}>{number}</SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button type="submit"
                            className='bg-gradient-to-br hover:scale-105  from-black w-full to-pink-800 text-wrap shadow-pink-500 shadow-md hover:bg-pink-600 text-white text-lg md:text-xl py-2 md:py-4 rounded-lg px-4 mb-4 font-bold'>
                            Start Game
                        </button>
                    </form>
                </Form>
            </div>
            <div className="absolute w-40 bottom-0 hidden md:block right-0 p-8 opacity-10 ">
                <Image src={heart} alt="Heart Icon" />
            </div>
            <div className="absolute hidden md:block w-40 top-0 left-0  p-8 opacity-10 ">
                <Image src={heart} alt="Heart Icon " />
            </div>
        </div>
    );
}

export default UserOnboardComponent;
