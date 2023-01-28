const Footer = () => (
  <footer className="bg-black">
    <div className="px-8 xl:px-0 py-12 max-w-7xl m-auto">
      <img
        src="./logo.png"
        alt="Uniform"
        height="34"
        width="130"
        className="block mb-12"
      />

      <ul className="text-white grid grid-cols-1 md:grid-cols-4 gap-8">
        <li>
          <ul>
            <li className="font-bold mb-2">Uniform Platform</li>
            <li>
              <a href="https://uniform.dev/benefits" target="_blank">
                Benefits
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/features" target="_blank">
                Features
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/pricing" target="_blank">
                Pricing
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/customers" target="_blank">
                Customers
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/partners" target="_blank">
                Partners
              </a>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li className="font-bold mb-2">Learn</li>
            <li>
              <a href="https://uniform.dev/blogs" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/learn/how-to" target="_blank">
                Developer how-to's
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/resources" target="_blank">
                Resources
              </a>
            </li>
            <li>
              <a href="https://docs.uniform.app/" target="_blank">
                Uniform Platform Docs
              </a>
            </li>
            <li>
              <a href="https://docs.uniform.dev/sitecore" target="_blank">
                Uniform for Sitecore Docs
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/faq" target="_blank">
                FAQs
              </a>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li className="font-bold mb-2">Company</li>
            <li>
              <a href="https://uniform.dev/about-us" target="_blank">
                About us
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/contact" target="_blank">
                Contact us
              </a>
            </li>
            <li>
              <a href="https://uniform.dev/careers" target="_blank">
                Careers
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="font-bold mb-2">Follow us</li>
            <li>
              <a
                href="https://youtube.com/channel/UCEhO1B_bT_sUV0DT4c4rNQA"
                target="_blank"
              >
                YouTube
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/uniformdev" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://uniform.to/discord" target="_blank">
                Discord
              </a>
            </li>
            <li>
              <a href="https://uniform.dev" target="_blank">
                Uniform website
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
