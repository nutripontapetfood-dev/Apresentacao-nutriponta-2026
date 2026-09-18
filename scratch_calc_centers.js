const fs = require('fs');
const content = fs.readFileSync('scratch_mapa.svg', 'utf8');

const targetStates = ['RS', 'SC', 'PR', 'SP', 'RJ', 'MG', 'BA', 'SE', 'GO', 'PA', 'AM', 'RR'];

const centers = {};

targetStates.forEach(uf => {
  // Regex to match polygon or path with id="UF"
  const polyRegex = new RegExp(`(?:<polygon[^>]*id="${uf}"[^>]*points="([^"]+)"|<polygon[^>]*points="([^"]+)"[^>]*id="${uf}")`, 'i');
  const pathRegex = new RegExp(`(?:<path[^>]*id="${uf}"[^>]*d="([^"]+)"|<path[^>]*d="([^"]+)"[^>]*id="${uf}")`, 'i');
  
  let match = content.match(polyRegex);
  if (match) {
    const pointsStr = match[1] || match[2];
    const points = pointsStr.trim().split(/\s+/).map(p => {
      const [x, y] = p.split(',').map(Number);
      return { x, y };
    }).filter(p => !isNaN(p.x) && !isNaN(p.y));
    
    if (points.length > 0) {
      const avgX = points.reduce((s, p) => s + p.x, 0) / points.length;
      const avgY = points.reduce((s, p) => s + p.y, 0) / points.length;
      centers[uf] = { x: Math.round(avgX * 10) / 10, y: Math.round(avgY * 10) / 10 };
      return;
    }
  }

  match = content.match(pathRegex);
  if (match) {
    const dStr = match[1] || match[2];
    // extract all x,y from d
    const coords = [];
    const re = /([0-9.]+)[,\s]+([0-9.]+)/g;
    let m;
    while ((m = re.exec(dStr)) !== null) {
      coords.push({ x: Number(m[1]), y: Number(m[2]) });
    }
    if (coords.length > 0) {
      const avgX = coords.reduce((s, p) => s + p.x, 0) / coords.length;
      const avgY = coords.reduce((s, p) => s + p.y, 0) / coords.length;
      centers[uf] = { x: Math.round(avgX * 10) / 10, y: Math.round(avgY * 10) / 10 };
    }
  }
});

console.log(JSON.stringify(centers, null, 2));
