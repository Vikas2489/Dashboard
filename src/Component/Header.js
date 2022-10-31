function Header(props) {
  return (
    <header className="bg-[#313F9E] py-3 flex items-center ">
      <figure className="w-[50px] ml-3">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/dashboard-icon.png"
          alt="dashboard"
        />
      </figure>
      <h1 className="font-semiBold ml-[10px] inline-block font-bold text-2xl text-white">
        Dashboard
      </h1>
    </header>
  );
}

export default Header;
