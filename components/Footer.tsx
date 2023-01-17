const Footer = () => (
  <footer className="bg-black">
    <div className="px-8 xl:px-0 py-12 max-w-7xl m-auto">
      <img src="./logo.png" alt="Uniform" width="130" className="block mb-12" />

      <ul className="text-white grid grid-cols-1 md:grid-cols-4 gap-8">
        <li>
          <ul>
            <li className="font-bold mb-2">Uniform Platform</li>
            <li>
              <a href="#">Benefits</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li className="font-bold mb-2">Learn</li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developer how-to's</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Uniform Platform Docs</a>
            </li>
            <li>
              <a href="#">Uniform for Sitecore Docs</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li className="font-bold mb-2">Company</li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Careers us</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="font-bold mb-2">Follow us</li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Uniform website</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
