const Header = () => (
  <header className="bg-black sticky top-0">
    <div className="flex justify-between items-center px-8 xl:px-0 max-w-7xl m-auto h-20">
      <img
        src="./logo.png"
        alt="Uniform"
        width="130"
        height="34"
        className="block"
      />
      <ul className="flex space-x-6 text-sm underline items-center">
        <li>
          <a href="">Composable without compromise</a>
        </li>
        <li>
          <a href="">Unpack the stack</a>
        </li>
        <li>
          <a href="" className="cta">
            Become a guest
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
