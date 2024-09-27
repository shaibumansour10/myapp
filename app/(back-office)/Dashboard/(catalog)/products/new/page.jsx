import { error } from 'console'
import { title } from 'process';
import React from 'react'

export default function NewProduct() {
    const [imageUrl, setImageUrl] = useState("");
    const Categories = [
        {
            id: 1,
            title: "Category 1"
        },
        {
            id: 2,
            title: "Category 2"
        },
        {
            id: 3,
            title: "Category 3"
        },

    ]
    const Farmers = [
        {
            id: 1,
            title: "Farmer 1"
        },
        {
            id: 2,
            title: "Farmer 2"
        },
        {
            id: 3,
            title: "Farmer 3"
        },

    ]
    const [loading, setloading] = useState("false")
    const {
        register,
        reset,
        handlesubmit,
        formState: { errors },
    } = useForm();
}
export async function onSubmit(data) {
    {/*
            id =>auto
            title
            slag=>auto
            description
            image/images[]
            sku
            barcode
            productprice
            saleprice
            category
            farmer
            tags[]
            
            */}
    const slug = generateslug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/Farmers", data,
        "Category", reset
    );
    setImageUrl("");
}
"
return (
    <div>
        <FormHeader title="new category" />
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-4xl p-4 bg-white border border-gray-200
            rounded-lg shawod sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700
            mx-auto m">
            <div className="grid gap-4 sm:grid-cols-2 smgap-6">
                <TextInput
                    label="Product Title"
                    name="title"
                    register={register}
                    error={errors}
                    classN ame="w-full"
                />
                <TextInput
                    label="Product sku"
                    name="sku"
                    register={register}
                    error={errors}
                    classN ame="w-full"
                />
                <TextInput
                    label="Product barcode"
                    name="barcode"
                    register={register}
                    error={errors}
                    classN ame="w-full"
                />
                <TextInput
                    label="Product price (Before discount)"
                    name="productPrice"
                    register={register}
                    error={errors}
                    classN ame="w-full"
                />
                <TextInput
                    label="product sales price (after Discout)"
                    name="saleprice"
                    register={register}
                    error={errors}
                    className="w-full"
                />
                <selectInput
                    label="select market"
                    name="marketIds"
                    register={register}
                    error={errors}
                    className="w-full"
                    option={markets}
                    hasMultipleSelect={false}
                />
                <TextareaInput
                    label="Category description"
                    name="description"
                    register={register}
                    error={errors}
                    className="w-full"
                />
                <ImageInput
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="categoryImageUploader"
                    label="category Image"
                />
            </div>
            <submitButton
                isLoading={loading}
                buttonTitle="Create Category"
                loadingButtonTitle="Create Category please wait"
            />

            <div className="flex items-center justify-between
            px-12 py-6 bg-white text-slate-800 dark:text-slate-50 
             dark:bg-slate-600 rounded-lg shadow ">
                <h2 className="text-xl font-semibold">New Category</h2>
                <button className="">
                    <x />
                </button>

            </div>







    </div>
)
}