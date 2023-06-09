import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Utility = () => {
  const { filters, setFilters, reapply } = useContext(AppData);

  const handleChange = (update: string) => {
    const bool = !filters.utility[update as keyof boolean];
    const utility = { ...filters.utility, [update]: bool };
    setFilters({ ...filters, utility });
  };
  return (
    <div className="mx-auto flex flex-col items-start lg:flex-row lg:items-center  ">
      <div className="flex items-center pb-3 pt-3 lg:pb-1 lg:pt-1">
        <input
          type="checkbox"
          className="checkbox checkbox-sm "
          checked={filters.utility.cashback}
          onChange={() => {
            handleChange("cashback");
          }}
          {...(reapply && { disabled: true })}
        />
        <label htmlFor="Cashback" className="ml-2 text-sm">
          Cashback
        </label>
      </div>
      <div className="justfy-start flex items-center ">
        <input
          type="checkbox"
          className="checkbox checkbox-sm lg:ml-5"
          checked={filters.utility.travel}
          onChange={() => {
            handleChange("travel");
          }}
          {...(reapply && { disabled: true })}
        />
        <label htmlFor="travel" className="ml-2 text-sm">
          Travel
        </label>
      </div>
    </div>
  );
};
export default Utility;
