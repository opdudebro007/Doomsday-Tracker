const fs = require('fs');
const https = require('https');
const path = require('path');

const postersDir = path.join(__dirname, 'public', 'posters');
if (!fs.existsSync(postersDir)) {
  fs.mkdirSync(postersDir, { recursive: true });
}

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      } else {
        resolve(false);
      }
    });
  });
}

const map = {
  'agent-carter-s1': 'https://m.media-amazon.com/images/M/MV5BMzk0MzkxODMwOV5BMl5BanBnXkFtZTgwMjQzODE4NzE@._V1_SX300.jpg',
  'agent-carter-s2': 'https://m.media-amazon.com/images/M/MV5BMzk0MzkxODMwOV5BMl5BanBnXkFtZTgwMjQzODE4NzE@._V1_SX300.jpg',
  'what-if-s1': 'https://m.media-amazon.com/images/M/MV5BYWFiOTcwNzItMTg5Mi00ZTU4LThkZWYtYWNmZWQ1ODE5ZTVmXkEyXkFqcGc@._V1_SX300.jpg',
  'what-if-s2': 'https://m.media-amazon.com/images/M/MV5BYWFiOTcwNzItMTg5Mi00ZTU4LThkZWYtYWNmZWQ1ODE5ZTVmXkEyXkFqcGc@._V1_SX300.jpg',
  'loki-s1': 'https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YjIyLThvMzMtMWE0OGFhZThlYThiXkEyXkFqcGc@._V1_SX300.jpg',
  'loki-s2': 'https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YjIyLThvMzMtMWE0OGFhZThlYThiXkEyXkFqcGc@._V1_SX300.jpg'
};

async function run() {
  const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
  let content = fs.readFileSync(timelinePath, 'utf8');
  const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
  const timelineStr = match[1];
  let timeline = eval(timelineStr);

  for (let id in map) {
    console.log('Downloading ' + id);
    const dest = path.join(postersDir, id + '.jpg');
    await download(map[id], dest);
    
    // Update timeline.ts
    const item = timeline.find(t => t.id === id);
    if (item) {
      item.posterUrl = '/posters/' + id + '.jpg';
    }
  }

  const finalStr = JSON.stringify(timeline, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/'Legacy'/g, '"Legacy"');
  const newContent = content.replace(timelineStr, finalStr);
  fs.writeFileSync(timelinePath, newContent, 'utf8');
  console.log('Done!');
}
run();
