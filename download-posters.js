const fs = require('fs');
const path = require('path');
const https = require('https');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(timelinePath, 'utf8');

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) {
  console.error("No match");
  process.exit(1);
}

const timelineStr = match[1];
let timeline = eval(timelineStr);

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
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else if (res.statusCode === 301 || res.statusCode === 302) {
          https.get(res.headers.location, (res2) => {
              const file = fs.createWriteStream(dest);
              res2.pipe(file);
              file.on('finish', () => {
                  file.close();
                  resolve(true);
              });
          });
      } else {
        console.error(`Failed to download ${url}: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(err);
      resolve(false);
    });
  });
}

async function run() {
  for (let item of timeline) {
    if (item.posterUrl && item.posterUrl.startsWith('http')) {
      const dest = path.join(postersDir, `${item.id}.jpg`);
      console.log(`Downloading ${item.title}...`);
      await download(item.posterUrl, dest);
      item.posterUrl = `/posters/${item.id}.jpg`;
    }
  }

  const newTimelineStr = JSON.stringify(timeline, null, 2).replace(/"([^"]+)":/g, '$1:');
  const newContent = content.replace(timelineStr, newTimelineStr);
  fs.writeFileSync(timelinePath, newContent, 'utf8');
  console.log("Done downloading posters locally!");
}

run();
