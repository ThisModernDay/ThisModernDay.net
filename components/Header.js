import Link from 'next/link'
export default function Header() {
  return (
    <div className='flex justify-end bg-true-gray-200 dark:bg-true-gray-800 text-true-gray-800 dark:text-true-gray-200 pt-5 pr-2'>
        <div className="inline-flex items-center space-x-2">
            {session && <a href="#" onClick={handleSignout} className="btn-signin bg-true-gray-300 dark:bg-true-gray-600 rounded-lg px-2 py-1 hover:bg-amber-600">Sign out</a>  } 
            {!session && <a href="#" onClick={handleSignin}  className="btn-signin bg-true-gray-300 dark:bg-true-gray-600 rounded-lg px-2 py-1 hover:bg-amber-600">Sign in</a>  }
            {session && <img className="w-12 h-12 rounded-full border-2 border-amber-600" src={session.user.image} alt=""/>}

        </div>
    </div>
  )
}