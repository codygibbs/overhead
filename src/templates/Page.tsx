import PageHeading from "@Element/PageHeading"
import Link from "next/link"

interface Props {
  title: string
}

const Page: React.FC<Props> = (props) => {
  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeading title={props.title} />
        </div>
      </header>
      <main className="flex">
        <nav className="flex flex-col">
          <Link href="/timers">
            <div className="p-4">
              Timers
            </div>
          </Link>
          <Link href="/calendar">
            <div className="p-4">
              Calendar
            </div>
          </Link>
        </nav>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default Page
