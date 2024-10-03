export default function TextInput({
  label,
  id,
  inputName,
  className,
  autoComplete,
  inputType = "text",
  required = true,
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required && <span className={"text-red-400 ml-1"}>*</span>}
      </label>
      <div className="mt-2">
        <input
          type={inputType}
          name={inputName}
          required={required}
          id={id}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
