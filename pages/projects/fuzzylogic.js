import PageLayout from "../PageLayout";
import ReactPlayer from "react-player";

export default function FuzzyLogic(){
    return(
        <PageLayout>
            <div className="flex items-center justify-center pt-2">
            <h1 className='font-bold text-2xl mx-auto text-center'>MATLAB Simulink Fuzzy Logic Smart Irrigation System</h1>
            </div>
            <div className='md:grid md:grid-cols-5 md:w-2/3 md:m-auto md:mt-20 mx-5 mt-20'>
    <div className="col-span-3 md:p-2 space-y-10 bg-gray-300">
        <div className="h-full">
    <ReactPlayer
        url="https://vimeo.com/853989386"
        controls={true}
        width='100%'
        height='100%'

      />
      </div>
    </div>

    <div className='space-y-5 col-span-2 ml-10'>
    <h1 className='font-bold text-2xl'>Overview</h1>
    <p className='text-gray-600'>
        This Project Uses Fuzzy logic method to design a smart irrigation system model. The goal of the design is to check key parameters such as soil moisture level, humidity, temperature and rainfall volume. These parameters are run through a fuzzy logic algorithm creted in MATLAB.<br/><br/>
        A model of the irrigation system is designed in Simulink with the fuzzy logic algorithm as the control factor of water supply.
    </p>

    </div>
    </div>
            
        </PageLayout>
    )
}