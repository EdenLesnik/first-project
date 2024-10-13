import { Footer } from "flowbite-react";

const FooterP = () => {
    return (
        <Footer container className="bg-pink-300 bg-gradient-to-r from-red-600 to-blue-500 dark:bg-gradient-to-r from-green-300 to-blue-500-600 py-6">
            <div className="w-full text-center">
                <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center sm:justify-between">
                    <Footer.Brand 
                        href="/" 
                        src="https://via.placeholder.com/150" 
                        alt="Eden Logo" 
                        name="Eden"
                        className="mb-4 sm:mb-0 text-2xl font-bold dark:text-white text-gray-800"
                    />
                    <ul className="flex space-x-4 mb-4 sm:mb-0">
                        <li>
                            <a href="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-4 sm:mt-0">
                    <Footer.Copyright href="#" by="Eden" year={2023} className="text-gray-600 dark:text-white" />
                </div>
            </div>
        </Footer>
    );
};

export default FooterP;
