import { Link } from "react-router-dom";
import Footer from "./child_components/footer";

function About_page() {
  return (
    <>
      
      <section className="overflow-hidden pt-20 pb-12  w-10/12 m-auto lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-10/12 px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4386467.jpg&fm=jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 text-center">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#66f] mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p className="text-body-color mb-8 text-base">
                Heathbook is a secure online platform designed to help individuals keep track of their healthcare history. Access and manage your previous medical records, including diseases and hospital visits, all in one place. Stay informed about your health journey.
                </p>
                <p className="text-body-color mb-12 text-base">
                Create a secure account to access your health records. Our login and signup process ensures the confidentiality of your personal information.
                </p>
                < Link
                 to="/contact"
                  className="bg-[#66f] text-center rounded-lg py-2 px-3 text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
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
