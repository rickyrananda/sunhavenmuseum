import { useState } from 'react'
import images from '../constants/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'



function Navbar() {

    const [isActive, setIsActive] = useState(false)

  return (
    <div className='flex h-[60px] bg-primary text-secondary '>
        <div className='w-full py-1 px-[200px] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <img className='h-12 w-12' src={images.logo} alt='Sun Haven Logo' />
                <p>Museum Companion</p>
            </div>
            <div className='flex gap-5' id=''>
                {/* This is The Hall of Gems Section */}
                <div className='flex items-center gap-2 cursor-pointer' >
                    <p onClick={() => setIsActive(!isActive)}>The Hall of Gems</p>
                    {isActive ? <ChevronDownIcon className='h-5 w-5' /> : <ChevronUpIcon className='h-5 w-5' /> }
                </div>
                <div>
                    
                </div>

                {/* This is The Hall of Culture Section */}
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => setIsActive(!isActive)}>
                    <p>The Hall of Culture</p>
                    {isActive ? <ChevronDownIcon className='h-5 w-5' /> : <ChevronUpIcon className='h-5 w-5' /> }
                </div>
                <div>

                </div>

                {/* This is Aquarium Section */}
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => setIsActive(!isActive)}>
                    <p>Aquarium</p>
                    {isActive ? <ChevronDownIcon className='h-5 w-5' /> : <ChevronUpIcon className='h-5 w-5' /> }
                </div>
                <div>

                </div>
                {/* <ul className='flex gap-8'>
                    <li className=''><a>The Hall of Gems</a></li>
                        <ul className="hidden">
                            <li>Mana Bundle</li>
                            <li>Money Bundle</li>
                            <li>Golden Bundle</li>
                            <li>Bars Bundle</li>
                            <li>Gems Bundle</li>
                            <li>Nel'Vari Mines Bundle</li>
                            <li>Withergate Mines Bundle</li>
                        </ul>
                    <li><a>The Hall of Culture</a></li>
                        <ul className="hidden">
                            <li>Spring Crops Bundle</li>
                            <li>Summer Crops Bundle</li>
                            <li>Fall Crops Bundle</li>
                            <li>Winter Crops Bundle</li>
                            <li>Nel'Vari Crops Bundle</li>
                            <li>Withergate Crops Bundle</li>
                            <li>Flowers Bundle</li>
                            <li>Foraging Bundle</li>
                            <li>Exploration Bundle</li>
                            <li>Alchemy Bundle</li>
                            <li>Combat Bundle</li>
                            <li>Nel'Vari Temple Bundle</li>
                        </ul>
                    <li><a>Aquarium</a></li>
                        <ul className="hidden">
                            <li>Fishing Bundle</li>
                            <li>Spring Tank</li>
                            <li>Summer Tank</li>
                            <li>Fall Tank</li>
                            <li>Winter Tank</li>
                            <li>Nel'Vari Tank</li>
                            <li>Withergate Tank</li>
                            <li>Large Tank</li>
                        </ul>
                </ul>     */}
            </div>
        </div>
    </div>
  )
}

export default Navbar