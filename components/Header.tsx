const Header = () => (
  <header className="bg-black sticky top-0">
    <div className="flex justify-between items-center px-8 xl:px-0 max-w-7xl m-auto h-20">
      <a href="/">
        <img
          src="./logo.png"
          alt="Uniform"
          width="130"
          height="34"
          className="block"
        />
      </a>
      <ul className="flex space-x-6 text-sm underline items-center">
        <li>
          <a
            title="Composable without compromise"
            href="/composable-without-compromise"
          >
            Composable without compromise
          </a>
        </li>
        <li>
          <a title="Unpack the stack" href="/unpack-the-stack">
            Unpack the stack
          </a>
        </li>
        <li>
          <a title="Guests" href="/guests">
            Guests
          </a>
        </li>
        <li>
          <a title="About Us" href="/about-us">
            About Us
          </a>
        </li>
        <li>
          <a title="Become a guest" href="/" className="cta">
            Become a guest
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
