export function convertDurationToTimeString(duration: number){
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60) // resto da divisão por 60
  const seconds = duration % 60;

  // para cada hours, minutes, seconds, incluir o '0' a esqueda
  // mantendo o formato 00:00:00

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2,'0'))
    .join(':')
  
  return timeString
}