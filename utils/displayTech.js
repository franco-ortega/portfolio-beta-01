export default function displayTech(tech) {
  return tech.reduce((prev, curr) => prev + ' - ' + curr);
}
