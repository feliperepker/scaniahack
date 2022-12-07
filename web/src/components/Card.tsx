interface CardProps{
  region: string;
  qnt: string;
}

export function Card(props:CardProps){
  return(
    <div className="w-[15vw] h-[16vh] min-h-[150px] min-w-[150px] flex items-center justify-center flex-col border-[1px] border-gray-300 rounded-lg text-center mt-6">
      <h2 className="font-scaniaHeadline text-lg mb-4">{props.region}</h2>
      <p className="font-scaniaCondensed text-6xl">{props.qnt}</p>
    </div>
  )
}