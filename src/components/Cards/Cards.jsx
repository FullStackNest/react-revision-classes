/* eslint-disable react/prop-types */




const Cards = ({
    cardData,
    college,
    name,
}) => {
    return (
        <div className="p-4">
            <h3>{college}</h3>
            <h3>{name}</h3>
            <div className="d-flex flex-wrap gap-3">
                {cardData.map(item => (
                    <div key={item.id} className="card" style={{ width: "15rem" }}>
                        <img src={item.imageURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.cardTitle}</h5>
                            <p className="card-text">{item.cardDescription}</p>
                            <a href="#" className="btn btn-primary">{item.buttonText}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards