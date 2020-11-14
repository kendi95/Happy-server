import { Request } from "express";

export const filesToImage = (req: Request) => {
  const requestImages = req.files as Express.Multer.File[];
  const [image] = requestImages.map(image => {
    return {
      path: image.filename
    };
  });
  return image;
}
