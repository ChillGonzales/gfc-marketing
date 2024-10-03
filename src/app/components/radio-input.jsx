export default function RadioInput({
  options,
  className,
  label,
  inputName,
  required = true,
}) {
  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium leading-6">
        {label}
        {required && <span className={"text-red-400 ml-1"}>*</span>}
      </legend>
      <div className="mt-2 space-y-2">
        {options.map((option) => {
          return (
            <div className="flex items-center gap-x-3" key={option.id}>
              <input
                id={option.id}
                value={option.value}
                name={inputName}
                type="radio"
                required={required}
                className="h-4 w-4 border-gray-300 accent-main focus:ring-main hover:accent-main-600"
              />
              <label
                htmlFor={option.id}
                className="block text-sm font-medium leading-6"
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
