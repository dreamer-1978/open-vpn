import Link from 'next/link';

const linkMac = 'https://openvpn.net/downloads/openvpn-connect-v3-macos.dmg';
const linkWindows =
  'https://openvpn.net/downloads/openvpn-connect-v3-windows.msi';
const Hero = ({ heading, message }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen mb-5 bg-fixed bg-center bg-cover custom-img">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]" />
        <div className="p-10 text-white z-[2] ml-[-35rem] mt-[-6rem]">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <button
            type="button"
            className="inline-block px-8 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mr-4"
          >
            <Link href={`${linkWindows}`}>WINDOWS</Link>
          </button>
          <button
            type="button"
            className="inline-block px-8 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <Link href={`${linkMac}`}>MAC</Link>
          </button>
          <br />
          <br />
          <button
            type="button"
            class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <Link href='/apilist'>Download Files to Open-Vpn</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
