import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-12 bg-[#245445] text-white">
      <div className="mx-auto max-w-[1820px] px-4 py-16 text-center sm:px-8 lg:px-10">
        <h2 className="text-[82px] font-bold tracking-[-0.05em]">KeenKeeper</h2>
        <p className="mx-auto mt-5 max-w-3xl text-[16px] text-white/78">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <p className="mt-8 text-[28px] font-semibold">Social Links</p>
        <div className="mt-5 flex justify-center gap-4">
          {[FaInstagram, FaFacebookF, FaXTwitter].map((Icon, index) => (
            <span
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#233142]"
            >
              <Icon size={16} />
            </span>
          ))}
        </div>

        <div className="mt-14 border-t border-white/12 pt-6 text-sm text-white/55">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
