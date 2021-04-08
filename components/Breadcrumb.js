import Link from 'next/link'
function Crumb({ crumb }) {
  return (
    <a href="#" class="underline">
      {crumb}
    </a>
  )
}

function Breadcrumb({ state, city, section, street }) {
  return (
    <div className="mb-3">
      <span className="block font-normal text-gray-400 text-sm sm:text-base md:text-xl leading-snug">
        <Link href="/">
          <a className="underline">unifi Fibre Broadband Coverage</a>
        </Link>
        {state && (
          <span>
            {' / '}
            <Link href="/selangor">
              <a className="underline">{state}</a>
            </Link>
          </span>
        )}
        {city && (
          <span>
            {' / '}
            <Link href="/selangor/ampang">
              <a className="underline">{city}</a>
            </Link>
          </span>
        )}
        {section && (
          <span>
            {' / '}
            <Link href="/selangor/ampang/taman-bukit-indah">
              <a className="underline">{section}</a>
            </Link>
          </span>
        )}
        {street && (
          <span>
            {' / '}
            <Link href="/selangor/ampang/taman-bukit-indah/changkat-bukit-indah-2">
              <a className="underline">{street}</a>
            </Link>
          </span>
        )}
      </span>
    </div>
  )
}
export default Breadcrumb
