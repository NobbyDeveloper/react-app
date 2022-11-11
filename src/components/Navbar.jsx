import React from "react";

export const Navbar = () => {
    return (
        <div className="w-full h-16 text-white">
            <div className="pt-8 flex items-center justify-around h-full">
                <div className="flex-center gap-4 text-blue-100">
                    <img src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png" width='35' alt="" />
                </div>
                <div className="text-sm font-poppins flex-center gap-8 font-medium text-md">
                    <ul className="font-normal text-gray-300 inline-flex gap-5 items-center justify-center">
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Proyects</a>
                        </li>
                    </ul>
                    <button className="bg-blue-700/80  shadow-lg shadow-blue-800/50  p-1.5 text-md px-3 rounded-md text-blue-100/70">Contact Us</button>
                </div>
           </div>
        </div>
    );
};
