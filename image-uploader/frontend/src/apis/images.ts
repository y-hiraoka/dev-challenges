import { Image } from "../models/image";

const url = "/images";

export async function uploadImages(files: File[]) {
  const formData = new FormData();
  files.forEach(file => formData.append("files", file));

  await sleep(2000)

  const response = await fetch(url, { method: "POST", body: formData });
  const data: Image[] = await response.json();

  return data;
}

const sleep = (ms: number) =>
  new Promise<void>(resolve =>
    setTimeout(() => {
      resolve();
    }, ms),
  );
