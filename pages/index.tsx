import Head from 'next/head'

const Home = () => (
  <div className="flex h-screen bg-blue-500">
    <Head>
      <title>Create Next App</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <main className="container mx-auto px-3">
      <h1>Countries Challenge</h1>
    </main>

    <footer />
  </div>
)

export default Home
