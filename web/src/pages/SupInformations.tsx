import { useEffect, useState } from "react"
import api from "../services/api";

export interface SupProps{
  id: number;
  fornecedor:string,
  partNumber: string;
  quantidade: number;
}

export function SupInformations(){
  var pushData : SupProps[] = []
  const [supData, setSupData] = useState<SupProps[]>()
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
  
  useEffect(() =>{
      try{
         api.get(`/Sup/${data.username}`).then(response =>{
          setSupData(response.data)
        });
    }catch(err){
      alert(err)
    }
  },[])


      
async function updateData(){
  pushData.forEach((item) =>{
    var input: any  = document.getElementById(String(item.id))
    item.id = item.id,
    item.fornecedor = item.fornecedor
    item.partNumber = item.partNumber,
    item.quantidade = Number(input.value)
  })

  try{
    await api.put(`/Sup/${data.username}`, pushData)  
    alert('Seus dados foram alterados com sucesso!')
    }catch(err){
      alert(err)
    }
  }

  return(
    <div className="w-screen flex flex-col items-center">
      <h1 className="font-bold font-scaniaHeadline mt-8 text-3xl">Here is a Relation Between your Parts and your Stock</h1>
      <table className="w-[80%] max-w-[800px] mt-20">
        <thead>
          <tr >
            <th colSpan={2}  className="bg-[#041E42] border-[1px] border-[#041E42] border-b-white text-white h-11 font-scaniaCondensed font-medium">
                You are assign this as: {data.username}
            </th>
          </tr>
          <tr>
            <th className="bg-[#041E42] border-[1px] border-[#041E42] border-r-white text-white h-11 font-scaniaCondensed font-medium">Part Number</th>
            <th className="bg-[#041E42] border-[1px] border-[#041E42] text-white h-11 font-scaniaCondensed font-medium">Quantity</th>
          </tr>
        </thead>
        
          <tbody>
          {
             supData?.map(item => {
              pushData.push(item)
             return(
              <tr className="h-8">
                <td className="border-[1px] w-[80%] border-gray-300 pl-6">
                  {item.partNumber}
                </td>
                <td className="border-[1px] border-gray-300 text-center">
                 <input id={String(item.id)} name={String(item.id)} type="number" className="text-center w-full h-full" defaultValue={item.quantidade} /> 
                </td>
              </tr>
             )
          })}
          </tbody>
      </table>
      <button onClick={updateData} className="
       bg-green-600 rounded transition-all mt-3 p-2 w-[20%] text-white font-normal font-scaniaCondensed hover:bg-green-700">UPDATE THE DATAS</button>
    </div>
  )
}