import CenterContainer from './CenterContainer'

function TopNav() {
  return (
    <div className="shadow-sm mb-3 bg-white">
      <CenterContainer>
        <div className="flex justify-end">
          <a href="https://unifi.com.my/">
            <img src="/fibre-broadband/check-coverage/unifi-logo.svg" />
          </a>
        </div>
      </CenterContainer>
    </div>
  )
}

export default TopNav
