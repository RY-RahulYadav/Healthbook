import { Link } from "react-router-dom";
import Footer from "./child_components/footer";

function About_page() {
  return (
    <>
      <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap items-center justify-between">
            <div class="w-full px-4 lg:w-6/12">
              <div class="-mx-3 flex items-center sm:-mx-4">
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="py-3 sm:py-4">
                    <img
                      src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                  <div class="py-3 sm:py-4">
                    <img
                      src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4386467.jpg&fm=jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="relative z-10 my-4">
                    <img
                      src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12 text-center">
              <div class="mt-10 lg:mt-0">
                <span class="text-[#66f] mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p class="text-body-color mb-8 text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p class="text-body-color mb-12 text-base">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                < Link
                 to="/contact"
                  class="bg-[#66f] text-center rounded-lg py-2 px-3 text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default About_page;
