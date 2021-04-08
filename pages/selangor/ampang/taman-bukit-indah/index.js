import ReactDOMServer from 'react-dom/server'
import ListItem from '../../../../components/ListItem'
import CenterContainer from '../../../../components/CenterContainer'
import TopNav from '../../../../components/TopNav'
import Breadcrumb from '../../../../components/Breadcrumb'
import { streets } from '../../../../data'

export default function State() {
  return (
    <div>
      <TopNav />
      <CenterContainer>
        <Breadcrumb state="Selangor" city="Ampang" />
        <h1 class="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-tight text-tmOrange-500">
          Taman Bukit Indah
        </h1>
      </CenterContainer>
      <CenterContainer>
        <div className="py-10 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 bg-gray-100">
          <div className="text-sm sm:text-base text-gray-400 font-bold">SELECT YOUR STREET</div>
          <div>
            <ul className="grid gap-2 mt-10">
              {Object.entries(streets).map(([key, value]) => (
                <ListItem key={key} url={value}>
                  {key}
                </ListItem>
              ))}
            </ul>
          </div>
        </div>
      </CenterContainer>
    </div>
  )
}

console.log(ReactDOMServer.renderToStaticMarkup(<State />))
