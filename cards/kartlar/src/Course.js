import React from 'react';

function Course ({image, title, description}) {
    // console.log (props)
    // const title = props.title;
    // const description = props.description;
    // const {title, description} = props
  return (
    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{description}</p>
      </div>

    <div class="content">

    </div>
  </div>

  );
}
export default Course;