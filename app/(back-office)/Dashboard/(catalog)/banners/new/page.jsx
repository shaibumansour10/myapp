import { register } from "module";
import React from "react"
export default function NewBanner() {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setloading] = useState("false")
    const {
        register,
        reset,
        handlesubmit,
        formState: { errors },
    } = useFORM();
}
export async function onSubmit(data) {


    {/*
            -id=>auto()
            -title
            -link
            -description
            -image
            
            */}
    data.image = imageUrl;
    console.log(data);
    makePostRequest(setloading, "api/banner", data, "Banner",
        reset);
}
return (
    <div>
        <formHeader title="New Banner" />
        <form onSubmit={handlesubmit(onsubmit)}
            className="w-full max-w-4xl p-4 bg-white border border-gray-200
          rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700
          mx-auto my-3 "  >

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput
                    label="Banner Title"
                    name="title"
                    register={register}
                    errors={errors}
                />

                <TextInput
                    label="Banner link"
                    name="link"
                    type="url"
                    register={register}
                    errors={errors}

                />
                {/*configure this  in the core.js */}
                <ImageInput
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="bannerImageUploader"
                    label="banner"
                />
            </div>
            <submitButton
                isloading={loading}
                buttonTitle="Create banner"
                loadingButtonTitle="Create Banner please wait..."
            />
        </form>

    </div>
)




