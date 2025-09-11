import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //uploaded successfully
    fs.unlinkSync(localFilePath); //remove temperory saved file if successfully uploaded
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove temperory saved file if upload fails
    return null;
  }
};

export { uploadOnCloudinary };
