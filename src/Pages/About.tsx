import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section>
      <Link to="/">
        <h1 className="font-bold text-2xl">ShopHub</h1>
      </Link>
      <h1>About ShopHub</h1>
      <p>
        This demo is to show the React project for simple shopping cart
        application using React and Typescript
      </p>
    </section>
  );
};
export default AboutPage;
