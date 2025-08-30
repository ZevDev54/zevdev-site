import img1 from "../images/physicalprojects/36x24-HoldingMGES-compressed.jpg";
import Card from "./Card";


export default function PhysicalProjectPage() {
    return(
    <>

        <div className="whitecard slidesContainer">
            <h1 className="aligncenter bigtext"> MGES - Mini Goober Entertainment System</h1>
            <iframe width="560" height="315" src="https://youtu.be/1Y2K_1UHEbA?si=aDz-wYsrSrDvzq-D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p className="projectDescription">

                The MGES is my most advanced Industrial Design project to date. It is a XIAO ESP32 microcontroller that powers a super tiny 0.96" OLED screen. I challenged myself to
                put the 'console' into the smallest package I could, but I believe I can slim down the size even more with a custom PCB and a small lithium battery. I designed the
                case in SketchUp, and 3D printed the case. It took many print iterations to get all of the tolerances just right. I used a posca pen to add some decals to the case and then 
                coated it with a liquid plastic mix called XTC3D. The shell still has a slightly tacky feel, so I need to find a better coating for touchable items.   

                <br></br>
                <br></br>

                I was inspired by classic video game consoles such as the GameBoy, as well as other interactive pocket tech such as tamagotchis. 
                I really like the aesthetics of small, pocket size gadgets and I'm sure that I will make more pocket devices like this one!
                <br></br>
                <br></br>


                I programmed a game for the console called Dumb Chicken Game. It was inspired by Google's no internet dinosaur game. 
                It's surprisingly fun, even though it is just a simple arcade game about avoiding foxes and falcons.

                <br></br>
                <br></br>

                In my Media Studies class last year, one of our assignments was product photography and advertisement, so I made a series of advertisement concepts for the MGES. 
                The advertisement photos are in the graphic arts section of this website!
                <br></br>
                

                
                
            </p>
            
            {/* <div className="zcardlist">
                <Card imgPath={"../images/physicalprojects/36x24-HoldingMGES-compressed.jpg"} title="" link="" isExternalLink="false"></Card>
            </div> */}
            
        </div>


        <div className="whitecard slidesContainer">
            <h1 className="aligncenter bigtext"> MR. SYNTH Oscillator Toy</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5FAyFKfrF_0?si=fHs5X-3XgGsy0Y5d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p className="projectDescription">MR. SYNTH is a 555 timer chip based square wave oscillator.
                The toy has two alligator clips, which use an object connected between them as a resistor to control the oscillator's fequency.
                High resistance items will make the oscillator put out a low pitch, and low resistance items will make the oscillator put out a high pitch sound.
                I made this for a friend's birthday in one hectic weekend.
                I included a potentiometer and a photoresistor in the box, so that it can be controlled with a knob or played like a theremin with a flashlight.
                MR SYNTH can be controlled using any item that conducts electricity- you can even use your tongue! (but that hurts, haha).
                <br></br>
                <br></br>

                Eventually, I want to remake MR. SYNTH, and perhaps rebrand it to look like a 3D version of my frog mascot.  I'd also like to figure out how
                to build an analog filter, but I don't know how to do that yet! I guess I'll just have to figure it out :)

            </p>
        </div>


    </>
    );
}