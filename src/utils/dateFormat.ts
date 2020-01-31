const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
];

const days = [
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche'
]

export const threadHomepageDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDay() - 1;
  
  const monthDayNumber = date.getDate();
  const month = date.getMonth()
  const hours = date.getHours();
  let minutes = date.getMinutes().toString();

  minutes = minutes.toString().length === 1 ? "0" + minutes: minutes;

  return `${days[day].toLowerCase()} ${monthDayNumber} ${months[month]} à ${hours}h${minutes}`;
  
}