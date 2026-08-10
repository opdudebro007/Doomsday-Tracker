const fs = require('fs');
const path = require('path');
const https = require('https');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(timelinePath, 'utf8');

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) process.exit(1);

const timelineStr = match[1];
let timeline = eval(timelineStr);

const postersDir = path.join(__dirname, 'public', 'posters');
if (!fs.existsSync(postersDir)) {
  fs.mkdirSync(postersDir, { recursive: true });
}

async function fetchPoster(title, year) {
  try {
    const url = `http://www.omdbapi.com/?apikey=trilogy&t=${encodeURIComponent(title)}&y=${year}&type=movie`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
      return data.Poster;
    }
    const url2 = `http://www.omdbapi.com/?apikey=trilogy&t=${encodeURIComponent(title)}&type=movie`;
    const res2 = await fetch(url2);
    const data2 = await res2.json();
    if (data2.Response === "True" && data2.Poster && data2.Poster !== "N/A") {
      return data2.Poster;
    }
    return null;
  } catch (e) {
    return null;
  }
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
    }).on('error', (err) => resolve(false));
  });
}

async function run() {
  let found = 0;
  for (let item of timeline) {
    if (!item.posterUrl && item.phase === 'Legacy') {
      console.log(`Fetching poster for ${item.title}...`);
      const url = await fetchPoster(item.title, item.year);
      if (url) {
        const dest = path.join(postersDir, `${item.id}.jpg`);
        const success = await download(url, dest);
        if (success) {
          item.posterUrl = `/posters/${item.id}.jpg`;
          found++;
          console.log(`  Downloaded: ${item.posterUrl}`);
        }
      } else {
        console.log(`  Not found in OMDb for ${item.title}`);
      }
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const newTimelineStr = JSON.stringify(timeline, null, 2).replace(/"([^"]+)":/g, '$1:');
  const newContent = content.replace(timelineStr, newTimelineStr);
  fs.writeFileSync(timelinePath, newContent, 'utf8');
  console.log(`Done downloading legacy posters! Got ${found}`);
}

run();
