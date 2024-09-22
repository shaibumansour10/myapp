
import React from 'react'

export default function pageHeader({ Heading, LinkTitle, href }) {
    return (

        <div className="flex justify-between   ">
            <Heading title={title} />
            <Heading title="catagories" />
            <link className="item-center 
                take style of button sign with twitter in flowbite"
                href={href}>
                <span>{LinkTitle}</span>
                <plus /></link>


        </div>



    )
}