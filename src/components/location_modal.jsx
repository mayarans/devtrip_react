export default function LocationModal () {
  return (
    <div class="location-modal">
      <div class="close-modal">
        <i class="fa-solid fa-xmark close-modal-icon"></i>
      </div>
      <div class="location-modal-content">
        <section class="center-location">
          <h1 class="location-title">Localização</h1>
          <div class="search-location">
            <input
              type="text"
              class="input-search-location"
              placeholder="Onde?"
            />
          </div>
        </section>
      </div>
      <div class="actual-location">
        <i class="icon-location fa-solid fa-location-arrow"></i>
        <span class="actual-location-text">Usar minha localização atual</span>
      </div>
      <div class="modal-location-cities">
        <ul>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            Qualquer lugar
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Campina Grande
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> João Pessoa
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Patos
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Queimadas
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Sousa
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Pilões
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Alagoa Grande
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Soledade
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Cabaceiras
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Cajazeiras
          </li>
        </ul>
      </div>
    </div>
  )
}