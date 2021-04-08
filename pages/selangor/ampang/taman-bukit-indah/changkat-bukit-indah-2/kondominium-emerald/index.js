import ReactDOMServer from 'react-dom/server'
import ListItem from '../../../../../../components/ListItem'
import CenterContainer from '../../../../../../components/CenterContainer'
import TopNav from '../../../../../../components/TopNav'
import Breadcrumb from '../../../../../../components/Breadcrumb'
import { buildings } from '../../../../../../data'

export default function State() {
  return (
    <div>
      <TopNav />
      <CenterContainer>
        <Breadcrumb
          state="Selangor"
          city="Ampang"
          section="Taman Bukit Indah"
          street="Changkat Bukit Indah 2"
        />
        <h1 class="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-tight text-tmOrange-500">
          Kondominium Emerald
        </h1>
      </CenterContainer>
      <CenterContainer>
        <div className="py-10 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 border border-tmOrange-500">
          <div className="text-xl sm:text-2xl text-gray-900 font-bold">
            Kondominium Emerald is within the unifi Fibre coverage
          </div>
          <div className="my-8">
            <p>
              The next step is to check for internet port availability for your specific address:
            </p>
            <ol className="ml-8 mt-4 list-decimal">
              <li>Select from any plan from 30Mpbs up to 800Mbps</li>
              <li>Fill up your name, email, and phone number</li>
              <li>Search for your unit number</li>
            </ol>
          </div>
          <div>
            <a
              href="https://unifi.com.my"
              className="bg-tmOrange-500 text-white font-bold p-3 rounded inline-block"
            >
              CHECK FOR PORT AVAILABILITY
            </a>
            <div className="text-gray-500 text-sm italic mt-1">
              You don't have to decide to subscribe to unifi today, but it's good to know if we've
              got you covered.
            </div>
          </div>
        </div>
      </CenterContainer>
    </div>
  )
}

console.log(ReactDOMServer.renderToStaticMarkup(<State />))
