const Card = ({ title, imgUrl, description, siteLink, codeLink }) => {
  return (
    <div item className="project__item">
      <div className="card">
        <img src={imgUrl} alt={title} className="card__image" />
        <div className="card__title">{title}</div>
        <div className="card__description">{description}</div>
        <div className="card__links">
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <button className="card__btn">site</button>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="card__btn">code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
