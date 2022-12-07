interface CardProps{
  region: string;
  qnt: string;
}

export function Card(props:CardProps){
  return(
    <div className="w-40 h-40 flex items-center justify-center flex-col border-[1px] border-gray-300 rounded-lg text-center mt-6">
      <h2 className="font-scaniaHeadline text-md">{props.region}</h2>
      <p className="font-scaniaCondensed text-4xl">{props.qnt}</p>
    </div>
  )
}