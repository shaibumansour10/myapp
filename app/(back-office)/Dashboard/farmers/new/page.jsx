import React, { useState } from 'react'

export default function NewFarmer() {
    Const[loading, setLoading] = useState(false);
    const [couponCode, setCouponCode] = useState();

    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { error }
    } = useForm();
    async function onSubmit(data) {

    }
    return (
        <div>
            <div className="flex items-center justify-between
            px-12 py-6 bg-white text-slate-800 dark:text-slate-50 
             dark:bg-slate-600 rounded-lg shadow ">
                <h2 className="text-xl font-semibold">New Category</h2>
                <button className="">
                    <x />
                </button>

            </div>
            {/*
            id
            title
            slag
            description
            image
            
            */}
            const couponCode=

        </div>

    )
}