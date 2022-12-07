

export function Supplier(){

  const TOKEN_KEY = "0asdjas09djsa09djasdjsadajsd09asjd09sajcnzxn";
  var token = localStorage.getItem(TOKEN_KEY);
  var base64Url = token?.split('.')[1];
  var base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
  if (base64){
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
      var data = JSON.parse(jsonPayload);
  }

  //Parse information in Json format
  
  console.log(token)

  return(
    <div className="flex flex-col items-center justify-center gap-6">
      <h1  className="font-bold font-scaniaHeadline mt-8 mb-6 text-3xl">Add your part datas here</h1>

      <div className="flex flex-col items-start gap-2 w-[400px]">
        <p className="text-lg font-scaniaCondensed font-semibold">You are updating value as: {data.username}</p>
        <label htmlFor="partNumber" className="cursor-pointer font-scaniaCondensed">Whats the part number?</label>
        <input id="partNumber" placeholder="0000000" type="text" className="h-10 w-full border-[1px] bg-gray-100 border-gray-300 rounded p-2"/>
        <label htmlFor="quantity" className="cursor-pointer font-scaniaCondensed">Quantity</label>
        <input id="quantity" placeholder="000" type="number" className="h-10 w-full border-[1px] bg-gray-100 border-gray-300 rounded p-2"/>
        <button className="
       bg-green-600 rounded transition-all mt-3 p-2 w-full text-white font-bold font-scaniaCondensed hover:bg-green-700">ADD THE DATAS</button>
      </div>
    </div>
    


  )
}