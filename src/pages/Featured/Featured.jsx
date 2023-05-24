
import featuredImage from '../../assets/home/featured.jpg';
import SectionTitle from '../../components/SectionTitle';

const Featured = () => {
    const sectionStyle = {
        backgroundImage: `url(${featuredImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        padding: '1rem',
      };

  return (
    <section className="my-20" style={sectionStyle}>
    <SectionTitle subHeading="check it out" heading="Featured Items" />

    <div className="md:flex justify-center items-center gap-7">
      <div className="flex items-center justify-center">
        <img className="w-1/2" src={featuredImage} alt="" />
      </div>
      <div className="text-info p-8 bg-opacity-30 bg-black text-left rounded">
        <p className="text-warning">Aug 20, 2029</p>
        <p className="uppercase text-2xl py-4">Where can I get some?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum vel ipsam architecto minima fuga
          quae at tenetur praesentium dolor assumenda aperiam porro?
        </p>
        <button className="btn btn-outline btn-info my-8 border-0 border-b-4">Order Now</button>
      </div>
    </div>
  </section>
  );
};

export default Featured;
