import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import TitleSection from "./TitleSection";

type CardsInfo = {
    title: string,
    subtitle: string,
    description: string,
    image: {
        url: string,
        alt: string
    },
    phone: string,
    address: {
        state: string,
        country: string,
        city: string,
        street: string,
        houseNumber: number,
        zip: number,
    },
    bizNumber: number,
};

const Cards = () => {

    const [cards, setCards] = useState<CardsInfo[]>();

    const cardsPreview = async () => {
        const res = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
        setCards(res.data);
    };

    useEffect(() => {
        cardsPreview();
    }, []);

    return (
        <>
            <TitleSection />
            <main className="flex flex-col items-center justify-center min-h-screen bg-white py-10 dark:bg-black">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-8">
                    {cards?.map((item, index) => {
                        return (
                            <Card key={index} className="bg-gray-200 text-black shadow-lg rounded-lg dark:bg-gray-600 dark:text-white transition-transform hover:scale-105 duration-300 ease-in-out ">
                                <img 
                                    src={item.image.url} 
                                    alt={item.image.alt} 
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h1 className="text-lg font-semibold truncate">{item.title}</h1>
                                    <p className="text-sm text-gray-400 mb-2 truncate">{item.subtitle}</p>
                                    <p className="text-sm text-gray-600 line-clamp-3 dark:text-white">{item.description}</p>
                                    <hr className="my-4 border-gray-700" />
                                    <div className="flex flex-col space-y-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">Phone:</span>
                                            <span className="flex items-center"><FaPhoneAlt className="mr-2" />{item.phone}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">Address:</span>
                                            <span>{item.address.city}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">Card Number:</span>
                                            <span>{item.bizNumber}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </main>
        </>
    );
};

export default Cards;
