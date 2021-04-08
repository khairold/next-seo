function ListItem({ children, url }) {
  return (
    <li className="border-gray-200 border-solid border inline-block bg-white transform hover:scale-105 rounded-md hover:text-tmOrange-400 hover:border-tmOrange-500 font-medium text-gray-900 text-lg 0">
      <a href={url}>
        <div className="flex justify-between p-3">
          <div>{children}</div>
          <div className="">></div>
        </div>
      </a>
    </li>
  )
}

export default ListItem
