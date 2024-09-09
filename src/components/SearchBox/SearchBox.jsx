import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

function SearchBox() {
  const searchString = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.box}>
      <div className={css.title}>Find Contacts By Name</div>
      <input
        className={css.input}
        type="text"
        value={searchString}
        onInput={onInput}
      />
    </div>
  );
}

export default SearchBox;
