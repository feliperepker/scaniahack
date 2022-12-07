import { useNavigate } from "react-router-dom";
import { SupProps } from "../pages/SupInformations";
import { Card } from "./Card";

interface DataProps{
  brasilData: BrasilProps;
  sueciaData: OtherCountryProps;

  belgicaData: OtherCountryProps;
  supData: SupProps[];
}
export interface OtherCountryProps{
  id: number;
  peca: string;
  long_Desc_Central: string;
  total_Balance: number;
  country: string;
  place: string;
}
export interface BrasilProps{
  id: number;
  peca: string;
  long_Desc_Central: string;
  total_Balance: number;
  country: string;
  place: string;
  image: string;
}
export function Inventory({brasilData, sueciaData, belgicaData, supData} : DataProps){
  const navigate = useNavigate()

  function navigateTo(id: string){
    navigate(`/DetailsCt?=${id}`)
  }
  return(
    <div className="w-[50%] flex flex-col items-center mr-[10%]">
      <h2 className="font-scaniaCondensed text-3xl">Part quantity in stock</h2>
        <div className="grid grid-cols-3 w-full gap-x-20">
          <div className="cursor-pointer" onClick={() => {navigateTo(String(brasilData.country) + "+" + String(brasilData.peca))}}>
            <Card
            region="Brasil"
            qnt={brasilData.total_Balance ? String(brasilData.total_Balance) : '0'}
            />
          </div>
         <div className="cursor-pointer" onClick={() => {navigateTo(String(sueciaData.country) + "+" + String(sueciaData.peca))}}>
           <Card
            region="Suecia"
            qnt={sueciaData.total_Balance ? String(sueciaData.total_Balance) : '0'}
           />
         </div>

          <div className="cursor-pointer" onClick={() => {navigateTo(String(belgicaData.country) + "+" + String(belgicaData.peca))}}>
            <Card
            region="Belgica"
            qnt={belgicaData.total_Balance ? String(belgicaData.total_Balance) : '0'}
          />
          </div>
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