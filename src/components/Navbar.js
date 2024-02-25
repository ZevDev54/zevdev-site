import zevdevlogo from '../images/logo/ZDLogoNoBackground.png';

export default function Navbar() {
    return(
        <div className="bg-slate-400 flex">
            
            <img src={zevdevlogo} className='size-1/5 w-1/12 min-w-20 m-8'/>
        </div>
    )
};