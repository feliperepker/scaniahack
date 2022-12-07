let infos = [
  {key: "Velocity", value: "10 km/h"},
  {key: "Status", value: "Stopped"},
  {key: "NextPoint", value: "BR127"},
  {key: "Total Trips Today:", value: 10},
  {key: "Route", value: "Kd_Eixo"},
  {key: "Scanners", value: "Clear"}
]
interface InfoProps{
  lastVelocity: number,
  nextVelocity: number,
  distToNextPoint: number,
  autonomousOn: boolean,
  scannerSafety: boolean,
  scannerWarn: boolean,
  pathDeviation: number,
}
export interface ExternalProps{
    index: number,
    autonomousOn: boolean,
    modeOutdoorOn: boolean,
    modeIndoorOn: boolean,
    scannerSafety: boolean,
    scannerWarn: boolean,
    lidarSafety: boolean,
    lidarWarn: boolean,
    ultrasoundSafety: boolean,
    outdoorPointMissed: boolean,
    outdoorPathMissed: boolean,
    outdoorVelSafety: boolean,
    stopPointPickup: boolean,
    stopPointDrop: boolean,
    endRoute: boolean,
    tractionVelocity: number,
    antLat: string,
    antLong: string,
    antSvs: number,
    antQuality: number,
    lastVelocity: number,
    lastSequence: number,
    lastOnStraight: boolean,
    nextVelocity: number,
    nextSequence: number,
    nextOnStraight: boolean,
    navAngle: number,
    pathDeviation: number,
    distToNextPoint: number,
    distPointToPoint: number,
    distFromLastPoint: number,
    route1Length: number,
    pickUpPoint: number,
    dropPoint: number,
    lidarStartLoc: boolean,
    lidarForceUpdate: boolean,
    lidarPoseX: number,
    lidarPoseY: number,
    lidarYaw: number,
    lidarLocOn: boolean,
    lidarPoseQuality: number
}


export function Info({lastVelocity, nextVelocity, distToNextPoint, autonomousOn, scannerSafety, scannerWarn, pathDeviation}: InfoProps){
  return(
      <section className="flex justify-center w-[30vw] ">
        <table className="h-28 mt-2 w-[80%] mr-[10%] max-w-sm font-scaniaCondensed font-extralight ">
          <thead className="bg-[#041E42] text-white font-scaniaCondensed font-light border-[#041E42] border-[1px]">
            <tr>
              <th className="p-1" colSpan={2}>AGV - Externo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Current Velocity Point</td>
              <td className={`border-gray-200 border-[1px] text-center`}>{lastVelocity}</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Next Velocity</td>
              <td className={`border-gray-200 border-[1px] text-center`}>{nextVelocity}</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Distance to Next Point</td>
              <td className={`border-gray-200 border-[1px] text-center`}>{distToNextPoint}</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Autonomous</td>
              <td className={`border-gray-200 font-bold border-[1px] text-center ${autonomousOn ? 'text-green-600' : 'text-red-500' }`}>{autonomousOn ? " ON" : "OFF"}</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Scanner Safety</td>
              <td className={`font-bold border-gray-200 border-[1px] text-center ${scannerSafety ? 'text-red-500' : '' }`}>{scannerSafety ? "Stopped" : "Normal"}</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Scanner Warn</td>
              <td className={`font-bold border-gray-200 border-[1px] text-center ${scannerWarn ? 'text-yellow-500' : '' }`}>{scannerWarn ? "Warning" : "Normal"}</td>
            </tr>
            <tr className="">
              <td className="border-gray-200 border-[1px] p-[2px] font-bold text-left pl-2">Path Deviation</td>
              <td className={`border-gray-200 border-[1px] text-center`}>{pathDeviation}</td>
            </tr>
          </tbody>
        </table>
      </section>
  )
}