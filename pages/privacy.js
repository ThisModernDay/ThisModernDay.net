import Head from 'next/head'

import { faTwitter, faYoutube, faInstagram, faArtstation, faDiscord, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cFont = {
    fontFamily: 'Fira Code',
}

export default function Privacy() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-true-gray-200 dark:bg-true-gray-800">
        <Head>
            <title>ThisModernDay | Links</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap" rel="stylesheet"/>
        </Head>
        <div className="content-evenly space-y-5 text-gray-900 dark:text-white text-3xl" style={cFont}>
            <h1 className="text-5xl">
                Privacy Policy for ThisModernDay
            </h1>
            <p>
            This Privacy Policy document contains types of information that is collected and recorded by ThisModernDay and how we use it.
            </p>
            <p>
            Your privacy is important to us. It is ThisModernDay's policy to respect your privacy regarding any information we may collect from you across our website, <a className="text-amber-600" href="https://thismodernday.net">https://thismodernday.net</a>, and other sites we own and operate.
            </p>
            <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            <p>
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>
            <p>
            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
            </p>
            <p>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
            <p>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
            </p>
            <h1 className="text-5xl">
                EMAIL
            </h1>
            <p>
            ThisModernDay uses social authentication (Google, Twitch, Discord and Patreon) to uniquely identify you. Part of the authentication process records your email registered with the given service for account linking. The email recorded during authentication is NOT accesible publicly, is not used for email marketing and is not shared with any 3rd party service. 
            </p>
            <h1 className="text-5xl">
                LOG FILES
            </h1>
            <p>
            ThisModernDay follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
            <h1 className="text-5xl">
                Children's Information
            </h1>
            <p>
            ThisModernDay does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
            <h1 className="text-5xl">
                Online Privacy Policy Only
            </h1>
            <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ThisModernDay. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
            <h1 className="text-5xl">
                Consent
            </h1>
            <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
            <p>
            This policy is effective as of 28 December 2020.
            </p>
        </div>
    </div>
  );
}