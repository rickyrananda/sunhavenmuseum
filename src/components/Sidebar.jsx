import React from 'react'

function Sidebar() {
    return (
        <div className='flex h-[calc(100vh-64px)] w-[400px] bg-primary text-secondary solid border-r-[1px] border-secondary'>
            <div className='w-full px-6 py-10'>
                <div className=''>
                    <p className='text-secondary font-medium text-lg'>Player</p>
                    <ul>
                        <li className='py-1 hover:bg-secondary hover:text-primary rounded-sm px-2 cursor-pointer'>
                            <a className='block w-full' href='/'>Home</a>
                        </li>
                        <li className='py-1 hover:bg-secondary hover:text-primary rounded-sm px-2 cursor-pointer mt-1'>
                            <a className='block w-full' href='/profile'>Profile</a>
                        </li>
                        <li className='py-1 hover:bg-secondary hover:text-primary rounded-sm px-2 cursor-pointer mt-1'>
                            <a className='block w-full' href='/achievement'>Achievement</a>
                        </li>
                    </ul>
                    <p className='text-secondary font-medium text-lg mt-4'>Collections</p>
                    <ul>
                        <li className='py-1 hover:bg-secondary hover:text-primary rounded-sm px-2 cursor-pointer'>Home</li>
                        <li className='py-1 hover:bg-secondary hover:text-primary rounded-sm px-2 cursor-pointer'>Profile</li>
                    </ul>
                    <p className='text-secondary font-medium text-lg'>Misc</p>
                    <ul>
                        <li className='py-1 hover:bg-secondary hover:text-primary rounded-sm px-2 cursor-pointer'>Museum Bundles</li>
                        <li className='py-1 hover:bg-secondary hover:text-primary rounded-sm px-2 cursor-pointer'>Profile</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Sidebar