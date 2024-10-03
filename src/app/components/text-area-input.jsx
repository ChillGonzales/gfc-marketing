export default function TextAreaInput({
  label,
  id,
  inputName,
  className,
  rows,
  defaultValue = "",
  required = true,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {required && <span className={"text-red-400 ml-1"}>*</span>}
      </label>
      <div className="mt-2">
        <textarea
          rows={rows}
          name={inputName}
          id={id}
          required={required}
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}
