import Head from "next/head"
import Page from "@Template/Page"
import NewTimeEntryForm from "@Domain/NewTimeEntryForm"
import StackList from "@Element/StackList"
import { Timer } from "@Type/time"

export default function Home() {
  const timers: Timer[] = [
    {
      projectID: "test-123",
      start: new Date("December 17, 2021 03:24:00"),
      task: "Just doing stuff",
    },
    {
      projectID: "test-456",
      start: new Date("January 24, 2021 13:24:00"),
      task: "Writing tests",
    },
  ]

  return (
    <Page title="Dashboard">
      <Head>
        <title>Overhead</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewTimeEntryForm />

      <section className="mt-6 w-1/2">
        <h3 className="text-xl font-bold leading-7 text-white sm:text-2xl sm:truncate">
          Timers
        </h3>
        <StackList
          items={timers}
          template={(timer: Timer) => (
            <div>
              {timer.task}
              {timer.start.toLocaleTimeString("en-US")}
            </div>
          )}
        />
      </section>

      <footer className="">
      </footer>
    </Page>
  )
}
