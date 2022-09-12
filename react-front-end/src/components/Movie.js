import React from 'react';

export default function Movie(props) {
  return (
    <main className='movie-card'>
      <section className='movie-card-left'>
        <h2 className="text--regular">{props.name}</h2>
        <section className="interviewer">
          <h4 className="text--light">Your Cost:</h4>
          <h3 className="text--regular">{props.cost}</h3>
          <h3 className="text--regular">{props.img}</h3>
        </section>
      </section>
      <section className='movie-card-right'>
        {/* <section className="movie__actions">
          <img
            className="movie__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}

          />
          <img
            className="movie__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
        </section> */}
      </section>
    </main>
  );
}
