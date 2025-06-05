import images from '../constants/image'

function Navbar() {

    return (
        <div className='flex h-[64px] bg-primary text-secondary '>
            <div className='w-full py-1 px-7 flex items-center justify-between solid border-b-[1px] border-secondary'>
                <div className='flex items-center gap-4'>
                    <img className='h-9 w-10 rounded-lg' src='https://sunhaven.wiki.gg/images/d/d6/Achivement_Dungeoneer3.jpg?fdec0b' alt='Sun Haven Logo' />
                    <p className='font-semibold text-lg'>sunha.app</p>
                </div>
                <div className=''>

                    <button className='px-4 py-2 solid border-[1px] border-secondary rounded-md font-medium hover:bg-secondary hover:text-primary'>Create profile</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar