import {
  Blinds,
  CircuitBoard,
  CopyMinusIcon,
  Settings2,
  WrapText,
} from "lucide-react";
import {
  App0,
  App1,
  App2,
  App3,
  App4,
  App5,
  App6,
  App7,
  App8,
  App9,
  FigmaIcon,
} from "./Icons";

interface ServicesHoverProps {
  setIsServicesHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ServicesHover: React.FC<ServicesHoverProps> = ({
  setIsServicesHovered,
}) => {
  return (
    <div
      className="absolute left-0 top-full z-50 ms-[300px] rounded-3xl shadow-lg ring-1 ring-gray-900/5 h-[530px] animate-slideIn"
      onMouseEnter={() => setIsServicesHovered(true)} // Trigger hover state
      onMouseLeave={() => setIsServicesHovered(false)} // Trigger hover state exit
    >
      <div className="absolute left-1/2 z-10 h-[530px] flex w-[1100px]  -translate-x-1/2 px-4">
        <div className="w-[1400px] flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            <div className="flex">
              {/* Section 1: App Development */}
              <div className="flex-1 pr-4">
                <h3 className="mb-2 ms-[39px] text-lg font-bold text-purple-800 truncate">
                  App Development
                </h3>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-3">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App1 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                          Frontend Development
                        </p>
                        <p className="text-sm text-gray-600">
                          Craft dynamic UIs with Flutter, XML, and React Native.
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Backend Development */}
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App2 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                          Backend Engineering
                        </p>
                        <p className="text-sm text-gray-600">
                          Build scalable solutions with Dart, Java, Kotlin, and
                          React Native.
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* Mobile Development */}
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App3 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                          App Innovation
                        </p>
                        <p className="text-sm text-gray-600">
                          Develop cross-platform mobile apps using Flutter or
                          React Native, Ionic, Xamarin, NativeScript,.
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* Mobile Development */}
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <Blinds className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                          Hybrid App Development
                        </p>
                        <p className="text-sm text-gray-600">
                          Build apps using Ionic and Capacitor for seamless
                          integration with web and mobile.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Section 2: Web Development */}
              <div className="flex-1 pr-4">
                <h3 className="mb-2 ms-[39px] text-lg font-bold text-purple-800 ">
                  Web Development
                </h3>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App5 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                          Next-Level Experiences{" "}
                        </p>
                        <p className="text-sm text-gray-600">
                          Build fast, SEO-friendly, and scalable web apps with
                          Next.js.
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Back-End Development with Node.js (MERN Stack) */}
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App6 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                          MERN | MEAN Power{" "}
                        </p>
                        <p className="text-sm text-gray-600">
                          Create high-performance real-time apps with MongoDB,
                          Express, Angular, React, and Node.js.
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Back-End Development with PHP */}
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App7 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                          PHP Back-End Solutions{" "}
                        </p>
                        <p className="text-sm text-gray-600">
                          Build dynamic, scalable back-end systems with PHP for
                          robust websites.
                        </p>
                      </div>
                    </div>
                  </a>
                  {/*CMS*/}
                  <div className="  ">
                    <a
                      href="#"
                      className="block hover:bg-gray-50 p-3 rounded-lg group "
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                          <CopyMinusIcon className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                          {/* Replace with an appropriate icon for CMS */}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                            CMS Solutions
                          </p>
                          <p className="text-sm text-gray-600">
                            Design and manage websites effortlessly with
                            WordPress, Joomla, or Shopify.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 3: Desktop Development */}
              <div className="flex-1 pr-4 ">
                <h3 className="mb-2 ms-[29px] text-lg font-bold text-purple-800 truncate ">
                  Desktop Development
                </h3>
                <div className="space-y-1">
                  {/* Power-Packed Apps with .NET */}
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group "
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App9 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                          Robust Apps with .NET{" "}
                        </p>
                        <p className="text-sm text-gray-600">
                          Create high-performance, enterprise-level apps for
                          Windows with .NET.
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Immersive Games with Unity */}
                  <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App0 />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                          Unity Immersion{" "}
                        </p>
                        <p className="text-sm text-gray-600">
                          Craft engaging 2D and 3D games with Unity for multiple
                          platforms.
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="border-t border-gray-300">
                    <h3 className="mb-2 mt-3 ms-[69px] text-lg font-bold text-purple-800  ">
                      SEO Services
                    </h3>
                    <div>
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-3 rounded-lg group "
                      >
                        <div className="flex items-center gap-x-4">
                          <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                            <App8 />{" "}
                            {/* Replace with your appropriate icon/component */}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                              SEO Audits and Analysis
                            </p>
                            <p className="text-sm text-gray-600">
                              Perform deep SEO audits to identify optimization
                              opportunities.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block hover:bg-gray-50 p-3 rounded-lg group"
                      >
                        <div className="flex items-center gap-x-4">
                          <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                            <WrapText className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                              Keyword Research
                            </p>
                            <p className="text-sm text-gray-600">
                              Analyze high-impact keywords.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: SEO - This will now be placed on the right of Desktop Development */}
              <div className="flex-1 pl-4">
                <div className="space-y-1">
                  {/* New SEO Service: Keyword Research */}
                  <a
                    href="#"
                    className="block hover:bg-gray-50 p-3 rounded-lg group"
                  >
                    <div className="flex items-center gap-x-4">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                        <App4 />{" "}
                        {/* Replace with your appropriate icon/component */}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                          Digital Marketing Strategy
                        </p>
                        <p className="text-sm text-gray-600">
                          Optimize your brand's presence with effective,
                          result-driven marketing strategies.
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="border-t border-gray-300">
                    <h3 className="mb-3 ms-[59px] mt-3 text-lg font-bold text-purple-800 truncate">
                      Ui/UX Design{" "}
                    </h3>
                    <a
                      href="#"
                      className="block hover:bg-gray-50 p-3 rounded-lg group "
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                          <FigmaIcon />{" "}
                          {/* Replace <FigmaIcon /> with the appropriate icon/component */}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                            Figma Mastery
                          </p>
                          <p className="text-sm text-gray-600">
                            Craft captivating interfaces powered by Figma's
                            brilliance{" "}
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="block hover:bg-gray-50 p-3 rounded-lg group "
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                          <Settings2 className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                          {/* Replace <FigmaIcon /> with the appropriate icon/component */}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                            Adobe XD & Illustrator Mastery
                          </p>
                          <p className="text-sm text-gray-600">
                            Turn ideas into stunning visuals with Illustrator's
                            precision.{" "}
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="block hover:bg-gray-50 p-3 rounded-lg group "
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                          <CircuitBoard className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                          {/* Replace <FigmaIcon /> with the appropriate icon/component */}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                            Rive Animation Magic
                          </p>
                          <p className="text-sm text-gray-600">
                            Animate designs into life with Rive's interactivity.{" "}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
