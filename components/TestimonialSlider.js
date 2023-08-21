// // testimonial data
const testimonialData = [
  {
    image: '/detlev_kolb.webp',
    name: 'Detlev Kolb',
    position: 'Customer',
    message: 'Very fast execution of the task.',
  },
  {
    image: '/edd_yundt.webp',
    name: 'Edd Yundt',
    position: 'Customer',
    message: 'The work is very well done.',
  },
  {
    image: '/florentin_fland.webp',
    name: 'Florentin Fland',
    position: 'Customer',
    message: 'The work was done quickly and efficiently. Thank you.',
  },
  {
    image: '/spinygrub.png',
    name: 'spinygrub',
    position: 'Customer',
    message: 'Incredibly professional service throughout, top quality product.',
  },
  {
    image: '/louis_gutfreund.webp',
    name: 'Louis Gutfreund',
    position: 'Customer',
    message: 'Great job. Thank you.',
  },
  {
    image: '/roberto_pena.webp',
    name: 'Roberto Pena',
    position: 'Customer',
    message: 'El trabajo se hizo perfectamente y con rapidez.',
  },
  {
    image: '/mentonfilip.webp',
    name: 'mentonfilip',
    position: 'Customer',
    message: 'The work was done perfectly.',
  },
  {
    image: '/charlesbonta.webp',
    name: 'charlesbonta',
    position: 'Customer',
    message: 'Everything went great, thanks for the fast delivery.',
  },
  {
    image: '/tanya1986pl.webp',
    name: 'tanya1986pl',
    position: 'Customer',
    message:
      'Very good work and delivered on time. Thank you for the quick creation of the landing page.',
  },
  {
    image: '/oleg_kmit.webp',
    name: 'Oleg Kmit',
    position: 'Customer',
    message: `${`I'm`} very happy with the work, you can feel a lot of experience in development. Sasha was quick to respond, did a good job, and got everything done early. Highly recommended! ⭐️⭐️⭐️⭐️⭐️`,
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[480px]">
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div>{person.position}</div>
                </div>
              </div>
              {/* quote & masseg */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* masseg */}
                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
