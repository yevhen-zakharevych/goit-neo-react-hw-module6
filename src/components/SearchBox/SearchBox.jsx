import css from "./SearchBox.module.css";

function SearchBox({ searchString, onSearchChange }) {
  const onInput = (e) => onSearchChange(e.target.value);

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
