import Head from "next/head"
import Page from "@Template/Page"
import NewTimeEntryForm from "@Domain/NewTimeEntryForm"

export default function Home() {
  return (
    <Page title="Dashboard">
      <Head>
        <title>Overhead</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewTimeEntryForm />

      <footer className="">
      </footer>
    </Page>
  )
}
