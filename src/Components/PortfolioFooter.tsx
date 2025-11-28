import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Components", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Guides", href: "#" },
  { label: "Support", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@shophub.dev" },
];

const PortfolioFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start lg:justify-between">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wide">
              Portfolio Ready
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">ShopHub</h2>
              <p className="text-slate-300 leading-relaxed">
                A minimal ecommerce dashboard built with React, Vite, and React
                Query. Use this footer to showcase polish and UX craft in your
                portfolio.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200"
            >
              View live demo <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 min-w-[280px]">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Quick Links
              </h3>
              <div className="space-y-2 text-sm text-slate-300">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Resources
              </h3>
              <div className="space-y-2 text-sm text-slate-300">
                {resources.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Newsletter
              </h3>
              <p className="text-sm text-slate-300">
                Get product updates and new components in your inbox.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md bg-slate-900 border border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} ShopHub. Built for learning and
            showcase.
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-200 hover:text-white hover:border-indigo-500 transition-colors"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
