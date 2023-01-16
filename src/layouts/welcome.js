import { Fragment } from 'react';

import CarruselC from '../components/carrusel/carruselCont';

import BlogC from '../components/blog/blogC';
import VisitC from '../components/visitUS/visitC';
import ProductsComp from '../components/products/products';

const Welcome = () => {
  return (
    <Fragment>
      <section id="carousel">
        <CarruselC />
      </section>
      <section id="featuredProducts">
        <ProductsComp numItems={8} textNavBar={'Productos Destacados'} />
      </section>
      <section id="blog">
        <BlogC />
      </section>
      <section id="visitenos">
        <VisitC />
      </section>
    </Fragment>
  );
};

export default Welcome;
