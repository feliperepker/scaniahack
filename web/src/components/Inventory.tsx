import { SupProps } from "../pages/SupInformations";
import { Card } from "./Card";

interface DataProps{
  brasilData: BrasilProps;
  sueciaData: OtherCountryProps;
  prototipoData: OtherCountryProps;
  holandaData: OtherCountryProps;
  supData: SupProps[];
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
export function Inventory({brasilData, sueciaData, prototipoData, holandaData, supData} : DataProps){
  return(
    <div className="w-[50%] flex flex-col items-center mr-[10%]">
      <h2 className="font-scaniaCondensed text-3xl">Part quantity in stock</h2>
        <div className="grid grid-cols-3 w-full gap-x-20">
          <Card
          region="Brasil"
          qnt={brasilData.quantidade ? String(brasilData.quantidade) : '0'}
         />
         <Card
          region="Suecia"
          qnt={sueciaData.quantidade ? String(sueciaData.quantidade) : '0'}
         />

          <Card
          region="Holanda"
          qnt={holandaData.quantidade ? String(holandaData.quantidade) : '0'}
         />
         <Card
          region="Protótipo"
          qnt={prototipoData.quantidade ? String(prototipoData.quantidade) : '0'}
         />
        {
          supData.map(supCard => {
           return( <Card
              region={supCard.fornecedor}
              qnt={supCard.quantidade ? String(supCard.quantidade) : '0'}
            />)
          })
        }
    </div>
    </div>
   
  )
}