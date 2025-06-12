import { useFilter } from "../../zustand/filter/filter";

function SearchBox() {
  const setFilter = useFilter((state) => state.setFilter);

  const handelChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handelChange} />
    </div>
  );
}

export default SearchBox;
