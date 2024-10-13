import { DarkThemeToggle, Navbar, TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';  
import { logout } from '../../../redux/actions/authActions'; 

const Header = () => {
    const location = useLocation().pathname;
    const navigate = useNavigate(); 
    const dispatch = useDispatch();  

    // Access login state from Redux store
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    // Handle sign out
    const handleSignOut = () => {
        dispatch(logout()); 
        navigate("/");  
    };

    return (
        <>
            <Navbar fluid rounded className="bg-white-300">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-pink-950 dark:text-green-500">Eden</span>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Brand className="gap-9 max-md:flex max-md:flex-col">
                        <Navbar.Link
                            as={Link}
                            href="/about"
                            to="/about"
                            active={location === "/about" || location === ""}
                            className="ml-[10px] gap-3 max-md:flex max-md:flex-col max-md:items-center"
                        >
                            About
                        </Navbar.Link>
                        <Navbar.Link
                            as={Link}
                            href="/"
                            to="/"
                            active={location === "/" || location === ""}
                            className="ml-[10px] gap-3 max-md:flex max-md:flex-col max-md:items-center"
                        >
                            Home
                        </Navbar.Link>
                        {isLoggedIn ? (
                            <>
                                <Navbar.Link
                                    as={Link}
                                    href="/my-cards"
                                    to="/my-cards"
                                    active={location === "/my-cards"}
                                    className="ml-[10px] gap-3 max-md:flex max-md:flex-col max-md:items-center"
                                >
                                    My Cards
                                </Navbar.Link>
                                <Navbar.Link
                                    as="button"
                                    onClick={handleSignOut}  // Call handleSignOut on click
                                    className="ml-[10px] gap-3 max-md:flex max-md:flex-col max-md:items-center"
                                >
                                    Sign out
                                </Navbar.Link>
                                <Navbar.Link
                                    as={Link}
                                    href="/profile" 
                                    to="/profile"
                                    active={location === "/profile"}
                                    className="ml-[10px] gap-3 max-md:flex max-md:flex-col max-md:items-center"
                                >
                                    Profile
                                </Navbar.Link>
                            </>
                        ):(
                        <>
                        <Navbar.Link
                            as={Link}
                            href="/signup"
                            to="/signup"
                            active={location === "/signup"}
                        >
                            Sign Up
                        </Navbar.Link>

                        <Navbar.Link
                            as={Link}
                            href="/login"
                            to="/login"
                            active={location === "/login"}
                        >
                            Login
                        </Navbar.Link>
                        </>
                        )

                        }

                        <TextInput type="text" rightIcon={IoIosSearch} placeholder="Search..." />
                        <DarkThemeToggle className="gap-3 max-md:flex max-md:flex-col max-md:items-center" />
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;
