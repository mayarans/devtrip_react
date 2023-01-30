export default function Card({ categoryImage, categoryTitle }) {
  return (
    <ul>
      <div className="image-grow">
        <img className="image-card" alt="imagem" src={categoryImage} />
      </div>
      <li className="title-card">{categoryTitle}</li>
    </ul>
  )
}
