import html2canvas from "html2canvas";

export const ExportToImage = async (
  element: HTMLElement,
  imageFileName: string
) => {
  const canvas = await html2canvas(element);
  canvas.toBlob((blobPart) => {
    const imageFile = new File([blobPart as Blob], imageFileName, {
      type: "image/png",
    });
    ShareImage(imageFile);
  });
};

const ShareImage = (imageFile: File) => {
  navigator.share({
    files: [imageFile],
    title: "Share Image",
  });
};

const downloadImage = (blob: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = blob;
  link.download = fileName;
  link.click();
  link.remove();
};
