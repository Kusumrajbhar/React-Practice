import React from "react";

const InterviewPrctice = () => {
  return (
    <>
      <article>
        <h1>This is a blog Title</h1>
        <p>This is the main blogs body text...</p>

        <figure>
          <img src="cars.jpg" alt="3 cars driving down a hilly road." />
          <figcaption>Image caption</figcaption>
        </figure>

        <h2>This is a blog subtitle</h2>
        <p>More body text...</p>
      </article>

      <aside>
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="#">Category 1</a>
          </li>
          <li>
            <a href="#">Category 2</a>
          </li>
          <li>
            <a href="#">Category 3</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default InterviewPrctice;
