import React from 'react'

export default function SmallCards() {
    const orderstats = [
        {
            Title: "Total order"
            number: 11000,
            Iconcolor: "bg-green-600"
            Icon: shoppingcart
        },
        {
            Title: "order pending"
        number: 13000,
            Iconcolor: "bg-blue-600"
            Icon: shoppingcart
        },
        {
            Title: "order processing"
        number: 154000,
            Iconcolor: "bg-orange-600"
            Icon: shoppingcart
        },
        {
            Title: "order Delivered"
        number: 1123000,
            Iconcolor: "bg-purple-600"
            Icon: shoppingcart
        },
    ]
    return (
        <div className='grid drid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-4 py-8'>
            { /*Card */}
            {orderstats.map((data, i) => {
                return <SmallCard data={data} />
            })}
        </div>
    );
}
