import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/indir.png";
import Bootstrap from "./images/komweb.png";
import Csharp from "./images/bootstrap-icons.png";
import Kompleweb from "./images/react-bootstrap.webp";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      
        <section className="section">
          <div className="columns">
            <div class="column">
              <Course
                image={Angular}
                title="Angular"
                description="Veniam perspiciatis repudiandae sit reprehenderit nihil nobis similique, illo tenetur at! Fuga eum aliquam quasi.
  Dignissimos a voluptate vero pariatur laudantium similique vitae eveniet odit, voluptates cumque debitis numquam architecto sint dolore quae, ipsam facilis quas ad quasi? In, maiores ullam! Architecto ullam sequi repudiandae?
  Eius voluptate tempora optio similique dolor alias vitae, explicabo asperiores deserunt. Voluptatem porro omnis vel, esse quis maxime iste et delectus necessitatibus eius vitae, vero alias hic! Et, accusamus possimus."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Boostrap-5"
                description="Veniam perspiciatis repudiandae sit reprehenderit nihil nobis similique, illo tenetur at! Fuga eum aliquam quasi.
  Dignissimos a voluptate vero pariatur laudantium similique vitae eveniet odit, voluptates cumque debitis numquam architecto sint dolore quae, ipsam facilis quas ad quasi? In, maiores ullam! Architecto ullam sequi repudiandae?
  Eius voluptate tempora optio similique dolor alias vitae, explicabo asperiores deserunt. Voluptatem porro omnis vel, esse quis maxime iste et delectus necessitatibus eius vitae, vero alias hic! Et, accusamus possimus."
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Komple Web"
                description="Veniam perspiciatis repudiandae sit reprehenderit nihil nobis similique, illo tenetur at! Fuga eum aliquam quasi.
  Dignissimos a voluptate vero pariatur laudantium similique vitae eveniet odit, voluptates cumque debitis numquam architecto sint dolore quae, ipsam facilis quas ad quasi? In, maiores ullam! Architecto ullam sequi repudiandae?
  Eius voluptate tempora optio similique dolor alias vitae, explicabo asperiores deserunt. Voluptatem porro omnis vel, esse quis maxime iste et delectus necessitatibus eius vitae, vero alias hic! Et, accusamus possimus."
              />
            </div>
            <div className="column">
              <Course
                image={Kompleweb}
                title="Frontend"
                description="Veniam perspiciatis repudiandae sit reprehenderit nihil nobis similique, illo tenetur at! Fuga eum aliquam quasi.
  Dignissimos a voluptate vero pariatur laudantium similique vitae eveniet odit, voluptates cumque debitis numquam architecto sint dolore quae, ipsam facilis quas ad quasi? In, maiores ullam! Architecto ullam sequi repudiandae?
  Eius voluptate tempora optio similique dolor alias vitae, explicabo asperiores deserunt. Voluptatem porro omnis vel, esse quis maxime iste et delectus necessitatibus eius vitae, vero alias hic! Et, accusamus possimus."
              />
            </div>
          </div>
        </section>
      </div>
 
  );
}

export default App;
