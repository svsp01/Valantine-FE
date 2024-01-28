import Image from "next/image";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"




export const Card = ({ imageUrl, title, description }: any) => {


    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <div className="w-full bg-black shadow-lg mb-10  cursor-pointer rounded-lg overflow-hidden border-t-4 border-pink-600 shadow-pink-700  ">
                    <div className="w-full" >
                        <div className="flex justify-center" >
                            <Image src={imageUrl} alt="Card" className="w-32" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <div className="text-lg text-pink-800 font-bold">{title}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-black text-white rounded-2xl border-pink-400 shadow-pink-600 shadow-lg">
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>

            </DialogContent>
        </Dialog>

    );
};
