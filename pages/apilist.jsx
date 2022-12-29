import * as cheerio from 'cheerio';
import Link from 'next/link';

const URL = 'https://ipspeed.info/freevpn_openvpn.php?language=ru';
const L2TP = 'https://ipspeed.info/freevpn_l2tpipsec.php?language=ru';
const example = 'https://ipspeed.info';

const ApiList = ({ html }) => {
  let links = [];
  const $ = cheerio.load(html);
  $('div.list').each((i, el) => {
    links.push($(el).find('a').attr('href'));
    links = links.filter((x) => x !== undefined);
  });
  return (
    <div className="bg-fixed  custom-img-link text-center pt-4">
      <button
        type="button"
        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        <Link href="/">BACK HOME</Link>
      </button>
      {links.map((item) => {
        return (
          <div className="" key={item}>
            <div className="flex-col text-center p-4">
              <div className="">
                <Link
                  className="text-3xl font-bold no-underline hover:underline text-orange-500 shadow-xl"
                  href={`${example}${item}`}
                >
                  {item}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApiList;

export async function getStaticProps() {
  const response = await fetch(URL);
  const doc = await response.text();

  return {
    props: {
      html: doc,
    },
  };
}
