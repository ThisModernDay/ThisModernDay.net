import Head from 'next/head'

import { faTwitter, faYoutube, faInstagram, faArtstation, faDiscord, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Links() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-true-gray-200 dark:bg-true-gray-800">
      <Head>
        <title>ThisModernDay | Links</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="content-evenly">
        <h1 className="text-gray-900 dark:text-white">
          <img className="mx-auto object-center w-24" src="/logo.svg" alt=""/>
          <p className="text-center">THISMODERNDAY</p>
          <div>
            <p className="text-center text-xs">CREATE | LEARN | EXPLORE</p>
          </div>
        </h1>
        <div className="flex py-2 justify-between items-center">
          <a className="" target="_blank" href="https://www.youtube.com/channel/UC1XOtiKiTqMEzoeam1E4geA">
            <FontAwesomeIcon className="w-6 text-gray-300 dark:text-white hover:text-red-500" icon={faYoutube}/>
          </a>
          <a className="" target="_blank" href="https://instagram.com/tmdtechnologies">
            <FontAwesomeIcon className="ml-2 w-6 text-gray-300 dark:text-white hover:text-pink-500" icon={faInstagram}/>
          </a>
          <a className="" target="_blank" href="https://twitter.com/seamless3d1">
            <FontAwesomeIcon className="ml-2 w-6 text-gray-300 dark:text-white hover:text-blue-500" icon={faTwitter}/>
          </a>
          <a className="" target="_blank" href="https://artstation.com/thismodernday">
            <FontAwesomeIcon className="ml-2 w-6 text-gray-300 dark:text-white hover:text-light-blue-300" icon={faArtstation}/>
          </a>
          <a className="" target="_blank" href="https://discord.gg/AEKr4arrDP">
            <FontAwesomeIcon className="ml-2 w-6 text-gray-300 dark:text-white hover:text-indigo-300" icon={faDiscord}/>
          </a>
          <a className="" target="_blank" href="https://www.patreon.com/ThisModernDay">
            <FontAwesomeIcon className="ml-2 w-6 text-gray-300 dark:text-white hover:text-red-600" icon={faPatreon}/>
          </a>
        </div>        
      </div>
    </div>
  );
}
