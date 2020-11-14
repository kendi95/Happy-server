import { Request } from "express";

export const filesToImages = (req: Request) => {
  const requestImages = req.files as Express.Multer.File[];
  const images = requestImages.map(image => {
    return {
      path: image.filename
    };
  });
  return images;
}
