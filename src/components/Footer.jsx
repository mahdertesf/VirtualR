import React from 'react'
import { resourcesLinks, platformLinks, communityLinks  } from '../constants'

function Footer() {
  return (
    <footer className='border-t border-neutral-700 mt-20 py-10 mx-20'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className=''>
                <h3 className='text-md font-semibold mb-4'>Resources</h3>
                <ul>
                    {resourcesLinks.map((links)=>{
                        return (
                            <li className='mb-2'>
                                <a href={links.href} className='text-neutral-500 hover:text-white'>{links.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className=''>
                <h3 className='text-md font-semibold mb-4'>Platform</h3>
                <ul>
                    {platformLinks.map((links)=>{
                        return (
                            <li className='mb-2'>
                                <a href={links.href} className='text-neutral-500 hover:text-white'>{links.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className=''>
                <h3 className='text-md font-semibold mb-4'>Community</h3>
                <ul>
                    {communityLinks.map((links)=>{
                        return (
                            <li className='mb-2'>
                                <a href={links.href} className='text-neutral-500 hover:text-white'>{links.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>

    </footer>
  )
}

export default Footer