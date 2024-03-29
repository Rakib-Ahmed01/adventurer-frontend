import { Helmet } from 'react-helmet';

export default function Blog() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Helmet>
        <title>Adventurer - Blog</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Blog
            </h1>

            <div className="mx-auto">
              <span className="inline-block w-28 h-1 bg-teal-500 rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2 auto-rows-fr">
          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={`data:image/jpeg;base64,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`}
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white  dark:bg-gray-900 text-lg">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                Difference between SQL & NOSQL?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>

              <ul className="mt-3 text-sm text-gray-500 dark:text-gray-300  list-decimal ml-4">
                <li>
                  Definition
                  <ol>
                    <li>
                      SQL - SQL databases are primarily called RDBMS or
                      Relational Databases
                    </li>
                    <li>
                      NOSQL - NoSQL databases are primarily called as
                      Non-relational or distributed database
                    </li>
                  </ol>
                </li>
                <li>
                  Type
                  <ol>
                    <li>SQL - SQL databases are table based databases</li>
                    <li>
                      NOSQL - NoSQL databases can be document based, key-value
                      pairs, graph databases
                    </li>
                  </ol>
                </li>
              </ul>

              <p className="mt-3 text-sm text-teal-500">21 October 2022</p>
            </div>
          </div>

          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={`data:image/png;base64,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`}
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                What is JWT and How does it work?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely
                transmitting information between parties as JSON object. It is
                compact, readable and digitally signed using a private key/ or a
                public key pair by the Identity Provider.
              </p>

              <p className="mt-3 text-sm text-teal-500">02 September 2019</p>
            </div>
          </div>
          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xEX1LdwFXOyPsADv3b9dHT8NGwNT7ZSq6w&usqp=CAU"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                What is the difference between javascript and NodeJS?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                JavaScript - JavaScript is a programming language.
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                NodeJS - NodeJS is a runtime for JavaScript. Using NodeJS we can
                run JS code on the servers.
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>

              <p className="mt-3 text-sm text-teal-500">28 August 2019</p>
            </div>
          </div>
          <div className="h-full rounded-md shadow">
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                How does NodeJS handle multiple requests at the same time?
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 ">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them.
              </p>

              <p className="mt-3 text-sm text-teal-500">20 October 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
