import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function MultiImageInput({
  label,
  imageUrls = [],
  setImageUrls,
  className = "col-span-full",
  endpoint = " multiProductsUploader",
}) {
  function handleImageRemove(index){
    const updatedImages=imageUrls.filter((image,i)=>i!==index)
    setImageUrls(updatedImages)
  }
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
        
      </div>
      {imageUrls.length>0 ? (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((imageUrl,i)=>{
          return(
            <div className="relative">
              <button onClick={()=>handleImageRemove(i)} className="absolute -top-4 -right-2 bg-slate-100 text-slate-900 rounded-full">
                <XCircle/>
              </button>
               <Image
           src={imageUrl}
           alt="Item image"
           width={1000}
           height={667}
           className="w-full h-32 object-cover"
         />
            </div>
          )
        })}
       </div>
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            // setImageUrl(res[0].url);
            // Do something with the response
            const urls=res.map((item,i)=>item.url)
            setImageUrls(urls)
            toast.success("Image Upload complete")
            console.log("Files: ", res);
            console.log("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            toast.error("Image Upload Failed,Try Again")
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}