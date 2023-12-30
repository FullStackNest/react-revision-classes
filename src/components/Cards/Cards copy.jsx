import { CARD_DATA } from "../../data/CardData"



const Cards = () => {
    return (
        <div className="d-flex flex-wrap gap-3">
            {CARD_DATA.map(item => (
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
    )
}

export default Cards