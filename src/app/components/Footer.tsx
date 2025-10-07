export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 border-t border-gray-100">

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          {/* Left Section */}
          <div className="mx-auto max-w-sm lg:max-w-none">
            <h2 className="text-3xl font-bold text-teal-600">VRBS</h2>
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Empowering businesses through AI-powered digital transformation. Building the future, one innovation at a time.
            </p>

            {/* Social Links */}
         
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900">Solutions</strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/contact" >AI Strategy</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="https://cal.com/abhishek-jadhav-rg741x/30min" >Automation</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/contact" >Analytics</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="https://cal.com/abhishek-jadhav-rg741x/30min" >Integration</a></li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900">Company</strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#about-us">About Us</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#process">Process</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/case-studies">Case Studies</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900">Resources</strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/contact">Documentation</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/case-studies">Case Studies</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/contact">Whitepapers</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="https://cal.com/abhishek-jadhav-rg741x/30min">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs text-gray-500">
            © 2025 VRBS All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
