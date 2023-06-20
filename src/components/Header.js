import Input from "./Input";
import sun from "../images/icon-sun.svg";

const Header = () => {
  return (
    <>
        <div className="header ">
            <div className="flex items-center justify-between px-5 relative top-8 md:max-w-lg md:mx-auto">
                <h1 className="track text-3xl text-white uppercase tracking-widest font-bold">Todo</h1>
                <span><img src={sun} alt="" /></span>
            </div>                
        </div>
        <div className="mx-auto px-5 relative bottom-24 ">
          <Input/>
        </div>        
    </>
  )
}

export default Header

// We need to add content in order for our image to display i.e width and height
// let's place the "place where we type our todo's" in the header....it makes sense to be there