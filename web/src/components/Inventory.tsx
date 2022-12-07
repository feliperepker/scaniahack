import { Card } from "./Card";

interface DataProps{
  brasilData: BrasilProps;
  sueciaData: OtherCountryProps;
  prototipoData: OtherCountryProps;
  holandaData: OtherCountryProps;
}
export interface OtherCountryProps{
  partNumber: string;
  quantidade: number
}
export interface BrasilProps{
  partNumber: string;
  name: string;
  image: string;
  quantidade: number
}
export function Inventory({brasilData, sueciaData, prototipoData, holandaData} : DataProps){
  return(
    <div className="w-[50%] flex flex-col items-center mr-[10%]">
      <h2 className="font-scaniaCondensed text-3xl">Part quantit in stock</h2>
      <div className="flex gap-6 ">
      
        <div>
          <Card
          region="Brasil"
          qnt={brasilData.quantidade ? String(brasilData.quantidade) : '0'}
         />
         <Card
          region="Suecia"
          qnt={sueciaData.quantidade ? String(sueciaData.quantidade) : '0'}
         />
        </div>
         <div>
          <Card
          region="Holanda"
          qnt={holandaData.quantidade ? String(holandaData.quantidade) : '0'}
         />
         <Card
          region="Protótipo"
          qnt={prototipoData.quantidade ? String(prototipoData.quantidade) : '0'}
         />
         </div>
          <div>
            <Card
            region="Fornecedor 1"
            qnt="202"
            />
             <Card
            region="Fornecedor 2"
            qnt="323"
            />
          </div>
      </div>
    </div>
   
  )
}