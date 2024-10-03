import { useEffect, useState } from "react";
import emailJs from "@emailjs/browser";

export default function FileUpload({
  label,
  buttonText,
  fileTypes,
  className,
  required = true,
}) {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileUrl, setSelectedFileUrl] = useState();

  useEffect(() => {
    if (selectedFile) {
      setSelectedFileUrl(URL.createObjectURL(selectedFile));
    }
  }, [selectedFile]);

  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium leading-6">
        {label}
        {required && <span className={"text-red-400 ml-1"}>*</span>}
      </legend>
      <div className="mt-2 space-y-2 flex flex-col">
        {selectedFileUrl && (
          <p className={"text-sm text-gray-900 text-start"}>
            {selectedFile?.name}
          </p>
        )}
        <label
          htmlFor={"resume"}
          className={
            "w-48 text-sm font-semibold text-center border-2 border-brand text-brand cursor-pointer rounded-md py-2 px-4 hover:bg-main-100"
          }
        >
          {buttonText}
        </label>
        <input
          className={"hidden"}
          type="file"
          id="resume"
          name="resume"
          accept={fileTypes}
          required={required}
          onChange={(e) => setSelectedFile(e?.target?.files[0])}
        />
      </div>
    </fieldset>
  );
}
