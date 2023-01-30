export default function SearchField() {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass" id="icon-search"></i>
      <input
        type="text"
        className="input-search"
        placeholder="Pesquisar eventos, shows, teatros, cursos..."
      />
    </div>
  )
}
