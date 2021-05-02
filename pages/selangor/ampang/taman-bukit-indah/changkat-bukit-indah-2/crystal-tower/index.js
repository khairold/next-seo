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
          <div className="text-xl sm:text-2xl text-gray-900 font-bold">We're sorry!</div>
          <div className="my-8">
            <p>
              Unfortunately unifi fiber is not available here. <br />
              But you might want to double check using our coverage checker.
            </p>
            <p className="mt-8 leading-5 text-gray-700 uppercase">
              Crystal Tower
              <br />
              Changkat Bukit Indah 2<br />
              Bukit Indah
              <br />
              68000 Ampang
              <br />
              Selangor
            </p>
            <p className="mt-8 italic leading-5 ">
              <span className="font-bold">Tips</span>: Start with entering you street name or
              building name. Do not enter your house unit number.
            </p>
          </div>
          <div>
            <a
              href="https://unifi.com.my/fibre-broadband/check-coverage"
              className="bg-tmOrange-500 text-white font-bold p-3 rounded inline-block"
            >
              CHECK COVERAGE NOW
            </a>
          </div>
        </div>
      </CenterContainer>
    </div>
  )
}

console.log(ReactDOMServer.renderToStaticMarkup(<State />))
