export default function handler(req,res) {
    const products = [
        {
            id:"1",
            name:"White T-shirt",
            price: 175,
            image:"/images/caro-1.png"
        },
        {
            id:"2",
            name:"Laptop Bag",
            price: 1250,
            image:"/images/caro-2.png"
        },
        {
            id:"3",
            name:"Mpow 059 Extra Bass Bluetooth Headphones",
            price: 800,
            image:"/images/caro-3.jpg"
        },
        {
            id:"4",
            name:"BASIC CREW NECK T-SHIRT",
            price: 800,
            image:"/images/caro-4.webp"
        },
        {
            id:"5",
            name:"HP Prelude Pro Recycled Backpack",
            price: 300,
            image:"/images/caro-5.jpg"
        },
        {
            id:"6",
            name:"Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic",
            price: 750,
            image:"/images/caro-6.webp"
        },
        {
            id:"7",
            name:"Apple AirPods",
            price: 1000,
            image:"/images/caro-7.webp"
        },
        {
            id:"8",
            name:"Vintage Square Sunglasses",
            price: 330,
            image:"/images/caro-8.webp"
        },
        {
            id:"9",
            name:"HUNT - BLACK",
            price: 120,
            image:"/images/caro-9.webp"
        },
        {
            id:"10",
            name:"Black T-Shirt",
            price: 210,
            image:"/images/caro-10.webp"
        },
        {
            id:"11",
            name:"White Shoes",
            price: 240,
            image:"/images/caro-11.jpg"
        },
        {
            id:"12",
            name:"Tucano Dri-fit Polo Shirt",
            price: 50,
            image:"/images/caro-12.webp"
        },
    ];

    res.status(200).json(products)
}