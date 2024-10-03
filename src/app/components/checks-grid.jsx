import { CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function ChecksGrid({
  items,
  columns = 2,
  mobileColumns = 1,
  icon = <CheckCircleIcon />,
}) {
  return (
    <div
      className={`grid grid-cols-${mobileColumns} lg:grid-cols-${columns} gap-x-1 gap-y-1`}
    >
      {items.map((item) => {
        return (
          <div key={item} className={"flex flex-row items-start justify-start"}>
            <span className={"h-6 min-w-6 text-main inline mt-2"}>{icon}</span>
            <span className={"text-wrap ml-1"}>{item}</span>
          </div>
        );
      })}
    </div>
  );
}
