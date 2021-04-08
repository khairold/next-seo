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
          Crystal Tower
        </h1>
      </CenterContainer>
      <CenterContainer>
        <div className="py-10 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 border border-tmOrange-500">
          <div className="text-xl sm:text-2xl text-gray-900 font-bold">
            Crystal Tower is NOT within the unifi Fibre coverage
          </div>
          <div className="my-8">
            <p>
              Unfortunately unifi Fiber is not available here.
              <br />
              But you might want to check out unifi Broadband or unifi Air
            </p>
          </div>
          <div>
            <a
              href="https://unifi.com.my"
              className="bg-tmOrange-500 text-white font-bold p-3 rounded inline-block"
            >
              CHECK OUT OUR PRODUCT & SERVICES
            </a>
          </div>
        </div>
      </CenterContainer>
    </div>
  )
}

console.log(ReactDOMServer.renderToStaticMarkup(<State />))
