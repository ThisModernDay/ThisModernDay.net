import Head from 'next/head'

import { faTwitter, faYoutube, faInstagram, faArtstation, faDiscord, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Moment from 'react-moment'
import CountUp from 'react-countup';

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/'

const cFont = {
  fontFamily: 'Unica One',
}


const heroImg = {
  backgroundImage: `url('/beangif.gif')`
}

export default function Home({ uploads, statistics }) {
  return (
    <div className="min-h-screen bg-true-gray-200 dark:bg-true-gray-800">
      <Head>
        <title>ThisModernDay | Portfolio</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"/>
      </Head>
      <div className="flex items-center justify-center">
        <div>
          <h1 className="mt-5 text-gray-900 dark:text-white">
            <img className="object-center w-24 mx-auto" src="/logo.svg" alt=""/>
            <p className="text-center">THISMODERNDAY</p>
            <div>
              <p className="text-xs text-center">CREATE | LEARN | EXPLORE</p>
            </div>
          </h1>
          <div className="flex items-center justify-between py-2">
            <a className="" href="https://www.youtube.com/channel/UC1XOtiKiTqMEzoeam1E4geA">
              <FontAwesomeIcon className="w-6 text-gray-300 dark:text-true-gray-200 hover:text-amber-600" icon={faYoutube}/>
            </a>
            <a className="" href="http://instagram.com/tmdtechnologies">
              <FontAwesomeIcon className="w-6 ml-2 text-gray-300 dark:text-true-gray-200 hover:text-amber-600" icon={faInstagram}/>
            </a>
            <a className="" href="http://twitter.com/seamless3d1">
              <FontAwesomeIcon className="w-6 ml-2 text-gray-300 dark:text-true-gray-200 hover:text-amber-600" icon={faTwitter}/>
            </a>
            <a className="" href="http://artstation.com/thismodernday">
              <FontAwesomeIcon className="w-6 ml-2 text-gray-300 dark:text-true-gray-200 hover:text-amber-600" icon={faArtstation}/>
            </a>
            <a className="" href="https://discord.gg/AEKr4arrDP">
              <FontAwesomeIcon className="w-6 ml-2 text-gray-300 dark:text-true-gray-200 hover:text-amber-600" icon={faDiscord}/>
            </a>
            <a className="" target="_blank" href="https://www.patreon.com/ThisModernDay">
              <FontAwesomeIcon className="w-6 ml-2 text-gray-300 dark:text-true-gray-200 hover:text-amber-600" icon={faPatreon}/>
            </a>
          </div>        
        </div>
      </div>
      <section className="flex flex-col items-center justify-center py-10 mt-5 bg-fixed bg-cover shadow-inner bg-hero text-true-gray-200 dark:text-true-gray-200">
        <div className="py-20 mx-auto lg:px-4">
          <div className="flex flex-col mb-12 text-left lg:text-center">
              {/* <h2 className="mb-1 text-xs font-semibold tracking-widest uppercase title-font">Guess what?</h2> */}
              <h1 className="mb-6 text-2xl font-semibold tracking-tighter sm:text-6xl title-font"><span className="text-amber-600">3D DESIGN</span> IS THE POWER<br className=""/>TO BRING <span className="underline text-amber-600">YOUR IDEAS</span> TO LIFE.</h1>
              <p className="mx-auto text-base font-medium leading-relaxed lg:w-1/2">My mission is to give you that power, the tools, and the knowledge to use them. By providing you with clear and easy to follow tutorials.</p>
          </div>
        </div>
      </section>
      {/* RECENTUPLOADS */}
      <section className="flex flex-col items-center justify-center py-10 bg-true-gray-800 dark:bg-true-gray-700 text-true-gray-200 dark:text-true-gray-200">
        {statistics.items.map((item) => {
          const { id,statistics = {} } = item;
          const { viewCount,  subscriberCount, videoCount} = statistics;
          return (
            <div key={id} className="flex items-center justify-between py-2 mb-4 space-x-4">
              <div className="inline-flex items-center space-x-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                <span><CountUp start={0} end={viewCount} duration={10}/></span>
              </div>
              <div className="inline-flex items-center space-x-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
                <span><CountUp start={0} end={videoCount} duration={10}/></span>
              </div>
              <div className="inline-flex items-center space-x-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
                <span><CountUp start={0} end={subscriberCount} duration={10}/></span>
              </div>
            </div>
          )
        })}
        <a href="https://www.youtube.com/channel/UC1XOtiKiTqMEzoeam1E4geA?sub_confirmation=1" target="_blank">     
          <button className="inline-flex items-center px-4 py-2 mb-4 -mt-4 space-x-1 font-bold rounded bg-true-gray-700 dark:bg-true-gray-800 hover:bg-amber-600 dark:hover:bg-amber-600">
            <FontAwesomeIcon className="w-6 h-6" icon={faYoutube}/>
            <span>SUBSCRIBE</span>
          </button>
        </a>
        <div>
          <h1 className="text-2xl text-true-gray-200" style={cFont}>RECENT UPLOADS</h1>
          <div className="h-1 w-50 bg-true-gray-200 dark:bg-true-gray-800"></div>
        </div>
        <div className="grid items-center justify-between gap-10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {uploads.items.map((item) => {
            const { id, snippet= {} } = item;
            const { title, publishedAt, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <div key={id} className="relative w-64 transition duration-500 ease-in-out transform hover:shadow-xl rounded-xl hover:-translate-y-1 hover:scale-110">
                <div className="relative p-2 space-y-2 bg-true-gray-700 hover:bg-amber-600 dark:bg-true-gray-600 dark:hover:bg-amber-600 text-gray-50 rounded-xl">
                  <div className="text-xs subpixel-antialiased"><Moment fromNow ago>{publishedAt}</Moment> ago</div>
                  <div className="w-24 h-1 bg-amber-600 dark:bg-amber-600"></div>
                  <a className="block" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank">
                    <img className="rounded-lg" src={medium.url} alt=""/>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4 bg-true-gray-200 dark:bg-true-gray-800 text-true-gray-800 dark:text-true-gray-200">
        <span>ThisModernDay's <a className="text-amber-600" href="https://thismodernday.net/privacy">privacy policy</a></span>
      </section>
    </div>
  );
}

export async function getServerSideProps(){
  const [uploadsRes, statisticsRes] = await Promise.all([
    fetch(`${YOUTUBE_API}playlistItems?part=snippet,contentDetails&maxResults=4&playlistId=${process.env.YOUTUBE_UPLOADS_ID}&key=${process.env.YOUTUBE_API_KEY}`),
    fetch(`${YOUTUBE_API}channels?part=statistics&forUsername=ThisModernDay&key=${process.env.YOUTUBE_API_KEY}`)
  ]);
  const [uploads, statistics] = await Promise.all([
    uploadsRes.json(), 
    statisticsRes.json(),
  ]);
  return { 
    props: { uploads, statistics } };
}
