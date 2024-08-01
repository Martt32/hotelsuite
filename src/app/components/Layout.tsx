import Link from 'next/link'
import { Home, BookOnlineOutlined, DiningOutlined, HailOutlined, Report, Sports, Settings, Phone } from '@mui/icons-material'

const Sidebar = ({ children }) =>{
    return(
        <div className='flex'>
        <div className='sidebar text-initClr font-bold flex flex-col space-y-32 shadow-md p-4'>
            <div>
                {
                    //Logo
                }
                <p className='text-3xl '>HazibalSuites</p>
            </div>
            <div>
                {
                    //Menu
                }
                <ul className=' flex flex-col space-y-4 text-sm'>
                    <Link href='/' className='flex highlight rounded-lg p-2'>                    
                    <li className='flex justify-center items-center cursor-pointer space-x-2'>
                        <Home fontSize='small'/>
                        <p>Home</p>
                    </li>
                    </Link>
                    <Link href='booking' className='flex highlight rounded-lg p-2'>
                    <li className='flex justify-center items-center cursor-pointer space-x-2'>
                        <BookOnlineOutlined/>
                        <p>Booking</p>
                    </li>
                    </Link>
                    <Link href='dining' className='flex highlight rounded-lg p-2'>

                    <li className='flex justify-center items-center cursor-pointer space-x-2'>
                        <DiningOutlined/>
                        <p>Dining</p>
                    </li>
                    </Link>
                    <Link href='report' className='flex highlight rounded-lg p-2'>

                    <li className='flex justify-center items-center cursor-pointer space-x-2'>
                        <Report/>
                        <p>Report</p>
                    </li>
                    </Link>
                    <Link href='sports' className='flex highlight rounded-lg p-2'>

                    <li className='flex justify-center items-center cursor-pointer space-x-2'>
                        <Sports/>
                        <p>Sports</p>
                    </li>
                    </Link>
                    <Link href='contactus' className='flex highlight rounded-lg p-2'>
                    <li className='flex justify-center items-center cursor-pointer space-x-2'>
                        <Phone/>
                        <p>Contact us</p>
                    </li>
                    </Link>
                </ul>
            </div>
            </div>
            <main className='flex min-h-screen w-full flex-col items-center justify-between p-2'>
                {children}
            </main>
        </div>
    )
}
export default Sidebar