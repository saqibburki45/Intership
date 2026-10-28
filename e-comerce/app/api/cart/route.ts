export async function GET(request:Request,response:Response){
    console.log("GET Request Recieved:",request.url)
    return new Response(
        JSON.stringify({ message: "GET request received" }),
        {
            headers: { 
                "Content-Type": "application/json",
                 "encoding": "utf-8"
             }
        }
    );
}
