import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SpecialOffers,
  Services,
  Subscribe,
  SuperQuality,
} from './sections';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='padding-b xl:padding-1 wide:padding-3'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='sm:py-32 py-16 w-full padding-x'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
