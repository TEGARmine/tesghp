import React, { useState } from "react";

function Navbar() {
  const [inputSearch, setInputSearch] = useState(false);

  const openSearch = () => {
    setInputSearch(!inputSearch);
  };

  return (
    <nav className="py-3 px-6 md:px-12 lg:px-20 xl:px-32 flex items-center justify-between fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <img
        src="https://tegarmine.github.io/tesghp/assets/logo-hoOvhjiO.svg"
        alt=""
      />
      <div className="hidden md:block">
        <ul className="flex items-center space-x-6">
          {!inputSearch && (
            <>
              <li>
                <a href="#">Program</a>
              </li>
              <li>
                <a href="#">Kajian</a>
              </li>
              <li>
                <a href="#">Donasi</a>
              </li>
              <li>
                <a href="#">Kemitraan</a>
              </li>
              <li>
                <a href="#">Update</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
            </>
          )}
          <li className={inputSearch ? "" : "hidden"}>
            <input
              className="w-[500px] input  animate-slideIn py-1 rounded-2xl pl-4"
              type="text"
              placeholder="Silahkan Cari"
            />
          </li>
          <li className="hover:cursor-pointer" onClick={openSearch}>
            <div className="h-full flex items-center">
              {!inputSearch ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4732 13.5266L11.9999 11.0733C12.96 9.87621 13.4249 8.3568 13.2991 6.82747C13.1733 5.29814 12.4664 3.87512 11.3236 2.85103C10.1808 1.82694 8.68911 1.27961 7.15519 1.32158C5.62126 1.36356 4.16172 1.99164 3.07667 3.0767C1.99161 4.16175 1.36353 5.62129 1.32155 7.15522C1.27958 8.68914 1.82691 10.1808 2.851 11.3236C3.87509 12.4664 5.29811 13.1733 6.82744 13.2991C8.35677 13.4249 9.87618 12.96 11.0732 11.9999L13.5266 14.4533C13.5885 14.5158 13.6623 14.5654 13.7435 14.5992C13.8248 14.633 13.9119 14.6505 13.9999 14.6505C14.0879 14.6505 14.175 14.633 14.2563 14.5992C14.3375 14.5654 14.4113 14.5158 14.4732 14.4533C14.5934 14.329 14.6606 14.1628 14.6606 13.9899C14.6606 13.817 14.5934 13.6509 14.4732 13.5266ZM7.33324 11.9999C6.41026 11.9999 5.50801 11.7262 4.74058 11.2135C3.97315 10.7007 3.37501 9.97185 3.0218 9.11913C2.66859 8.2664 2.57618 7.32809 2.75624 6.42285C2.93631 5.5176 3.38076 4.68608 4.03341 4.03344C4.68605 3.38079 5.51757 2.93634 6.42282 2.75627C7.32806 2.57621 8.26637 2.66862 9.11909 3.02183C9.97182 3.37504 10.7007 3.97318 11.2134 4.74061C11.7262 5.50804 11.9999 6.41029 11.9999 7.33327C11.9999 8.57095 11.5082 9.75793 10.6331 10.6331C9.7579 11.5083 8.57092 11.9999 7.33324 11.9999Z"
                      fill="#28292B"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </>
              )}
            </div>
          </li>
          <li>
            <button className="text-[#389ED9] border border-[#389ED9] px-[33px] py-2.5 rounded-[100px] font-medium hover:bg-[#389ED9] hover:text-white">
              Masuk
            </button>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <svg
          className="w-8 h-8 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 9a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 15a1 1 0 100 2h14a1 1 0 100-2H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
