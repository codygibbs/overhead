import ChevronLeft from "./icon/ChevronLeft"
import ChevronRight from "./icon/ChevronRight"

interface Props {
  title: string
}

const PageHeading: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a href="#" className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
            <ChevronLeft />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight />
                <a href="#" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">Engineering</a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight />
                <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">Back End Developer</a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PageHeading
