import React from "react";

const MovieCard = (props) => {
  return (
    <section className="py-5 bg-secondary">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {props.returnCards().map((card, i) => (
            <div className="col mb-5" key={i}>
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={props.data[i].posterUrl}
                  alt="product"
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{props.data[i].title}</h5>
                    <h6 className="fw-bold">({props.data[i].year})</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieCard;
