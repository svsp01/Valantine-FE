import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const CardAccordionContent = ({ description }: any) => (
    <div className="text-white text-center transition-all ease-in-out duration-3000">
        <p className="mt-2">{description}</p>
    </div>
);
export const Card = ({ imageUrl, title, description, }: any) => {


    return (

        <div className="w-full bg-gradient-to-br cursor-pointer rounded-lg from-pink-500 to-pink-600 animate-gradient infinite p-2 shadow-pink-700 shadow-sm transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-full ">
                            <div className="w-full flex  justify-center">
                                <Image src={imageUrl} alt="Card" className="w-32" />
                            </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value={title}>
                        <AccordionTrigger className="item-end flex">
                            <div className="">
                            <div className="flex justify-between">
                                <div>
                                    {title}
                                </div>
                            </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                             <CardAccordionContent description={description} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};