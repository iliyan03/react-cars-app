function Car({ car }) {
  return (
    <div className="car my-4 px-5 col col-lg-6">
        <h5 className="date d-block text-end">{ car.date }</h5>
        <div className="img-container w-100 text-center">
            <img src={ car.img } alt="Car"/>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
            <h1>{ car.model }</h1>
            <a href={ car.link } className="btn btn-primary">Виж повече</a>
        </div>
        <h5>{ car.description }</h5>
        <div className="d-flex justify-content-between align-items-center py-2">
            <p className="my-0">{ car.price } BGN</p>
            <p className="my-0">{ car.seller }</p>
        </div>
        <h5>{ car.comment }</h5>
    </div>
  )
}

export default Car