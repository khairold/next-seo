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
            Great! We've got you covered.
          </div>
          <div className="my-8">
            <p>
              This area is within our unifi fibre coverage.
              <br />
              Posts are limited. Hurry up and sign up today!
            </p>
            <p className="mt-8 leading-5 text-gray-700 uppercase">
              Kondominium Emerald
              <br />
              Changkat Bukit Indah 2<br />
              Bukit Indah
              <br />
              68000 Ampang
              <br />
              Selangor
            </p>
          </div>
          <div>
            <a
              href="https://unifi.com.my/fibre-broadband/check-coverage?address=kondominium emerald changkat bukit indah 2 selangor"
              className="bg-tmOrange-500 text-white font-bold p-3 rounded inline-block"
            >
              CHECK AVAILABLE PLANS
            </a>
          </div>
        </div>
      </CenterContainer>
    </div>
  )
}

console.log(ReactDOMServer.renderToStaticMarkup(<State />))
