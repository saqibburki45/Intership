export default function PopPage({usePop}:any){
    function ClosePop(){
        usePop(true)
    }
    return(
        <div className="relative bottom-[40vh] left-[40vw] bg-gray-950 w-fit backdrop-blur-3xl rounded-xl p-4 flex-col text-center content-center justify-center z-50">
           <h1 className="font-black text-white text-4xl">Your are fucked</h1>
           <button onClick={ClosePop} className="text-amber-300 bg-amber-600 pl-4 pr-4 p-3 cursor-pointer rounded">Ok</button>
        </div>
    )
}