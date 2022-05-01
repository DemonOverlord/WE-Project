import { useEffect } from "react"
import gsap from 'gsap'

const Curve = () => {
  const background = () => {
    const b1 = "linear-gradient(217deg, rgba(45, 212, 191,.9), rgba(45, 212, 191,0) 70.71%),  linear-gradient(127deg, rgba(99, 102, 241,.9), rgba(99, 102, 241,0) 70.71%), linear-gradient(336deg, rgba(225, 29, 72,.9), rgba(225, 29, 72,0) 70.71%)";
    const b2 = "linear-gradient(17deg, rgba(6, 182, 212,.7), rgba(6, 182, 212,0) 70.71%), linear-gradient(200deg, rgba(5, 150, 105, .9), rgba(5, 150, 105,.2) 70.71%),  linear-gradient(336deg, rgba(220, 38, 38,.8), rgba(220, 38, 38,0.1) 70.71%)";
    gsap.fromTo("#bg", {background: b1}, {ease: "none", duration: 6, background: b2, repeat: -1, yoyo: true});
  }

  useEffect(() => {
    gsap.from('#bg-main', {
      duration: 5,
      ease: 'power3.out',
      opacity: 0,
      filter: 'blur(1000px)'
    })
    background()
  })

  return (
    <>
      <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="svgPath">
        <path id="blob" fill="#8A3FFC">
          <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M240.8 -437.4C342.3 -358.5 475.5 -355 552.2 -294.7C628.9 -234.3 648.9 -117.2 664.7 9.1C680.4 135.3 691.8 270.7 607.6 318C523.5 365.4 343.7 324.7 226.5 365.9C109.3 407 54.7 530 -12.7 552C-80 573.9 -160 494.8 -219.6 420.4C-279.2 346 -318.4 276.2 -387.9 206.9C-457.4 137.7 -557.2 68.8 -559.5 -1.3C-561.8 -71.5 -466.7 -143 -383 -187.7C-299.2 -232.3 -227 -250.1 -165 -351.9C-103.1 -453.6 -51.6 -639.3 9.1 -655C69.7 -670.7 139.3 -516.3 240.8 -437.4;
          
          M271.6 -453.7C372.5 -412.1 488.9 -380.8 524.7 -306.9C560.6 -233 515.8 -116.5 465 -29.3C414.2 57.8 357.3 115.7 315.7 179.5C274 243.3 247.5 313 197.4 372.9C147.3 432.9 73.7 482.9 -12.8 505.2C-99.3 527.4 -198.7 521.8 -304.2 493.9C-409.7 465.9 -521.4 415.7 -609.2 329.7C-697 243.7 -761 121.8 -761.5 -0.2C-761.9 -122.3 -698.8 -244.7 -587.1 -289.3C-475.3 -334 -315 -301 -209.1 -339.6C-103.1 -378.3 -51.6 -488.6 16.9 -517.9C85.3 -547.1 170.7 -495.3 271.6 -453.7;
          
          M323.9 -502.1C432.4 -498.3 541.8 -437.2 579 -343.9C616.2 -250.7 581.1 -125.3 547.2 -19.6C513.2 86.2 480.5 172.3 415.3 217C350.1 261.6 252.4 264.8 177.8 329.9C103.1 395 51.6 522 -24.5 564.4C-100.5 606.7 -201 564.5 -245.7 482.1C-290.5 399.8 -279.5 277.4 -298.4 190.4C-317.3 103.3 -366.2 51.7 -377.7 -6.7C-389.2 -65 -363.5 -130 -363.1 -249.1C-362.7 -368.2 -387.6 -541.3 -331.3 -575.3C-275 -609.3 -137.5 -504.2 -14.9 -478.3C107.7 -452.5 215.3 -506 323.9 -502.1;
          
          M240.8 -437.4C342.3 -358.5 475.5 -355 552.2 -294.7C628.9 -234.3 648.9 -117.2 664.7 9.1C680.4 135.3 691.8 270.7 607.6 318C523.5 365.4 343.7 324.7 226.5 365.9C109.3 407 54.7 530 -12.7 552C-80 573.9 -160 494.8 -219.6 420.4C-279.2 346 -318.4 276.2 -387.9 206.9C-457.4 137.7 -557.2 68.8 -559.5 -1.3C-561.8 -71.5 -466.7 -143 -383 -187.7C-299.2 -232.3 -227 -250.1 -165 -351.9C-103.1 -453.6 -51.6 -639.3 9.1 -655C69.7 -670.7 139.3 -516.3 240.8 -437.4"  />
        </path>
        </clipPath>
      </svg>
      <div id="bg-main" className="fixed top-0 left-0 w-full h-full origin-top-left -z-10 blur-[100px]">
        <div className='fixed w-full h-full top-60 left-60 -z-10 clip'>
          <div id="bg" className="fixed w-full h-full -top-10 -left-10"></div>
      </div>
      </div>
    </>
  );
}
 
export default Curve;