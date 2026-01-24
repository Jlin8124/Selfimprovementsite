import Image from 'next/image';

export default function about() {
    return (
      <>
      <div className= "bg-sky-50">
      </div>
      <div className = "block">
        <p className = ""> Hello</p>
        
        <Image 
          src="/img/jlinphoto.png"
          alt="Profile Pic"
          width={200} // 300px
          height ={100}
          
          className="rounded-lg object-cover rotate-x-15 -rotate-y-30"
          />


        
      
      </div>
    </>
    );
}