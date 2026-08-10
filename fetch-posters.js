const fs = require('fs');
const path = require('path');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(timelinePath, 'utf8');

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) {
  console.error("Could not find mcuTimeline array");
  process.exit(1);
}

const timelineStr = match[1];
let timeline;
try {
  timeline = eval(timelineStr);
} catch (e) {
  console.error("Error evaluating timeline", e);
  process.exit(1);
}

async function fetchPoster(title, year, type) {
  try {
    // some titles need adjustment for OMDB
    let searchTitle = title;
    if (searchTitle === "The Avengers") searchTitle = "Marvel's The Avengers";
    if (searchTitle.includes("Spider-Man")) searchTitle = searchTitle.replace("-", " ");
    
    // OMDb uses 'movie', 'series', 'episode'
    const omdbType = type === 'show' ? 'series' : 'movie';
    const url = `http://www.omdbapi.com/?apikey=trilogy&t=${encodeURIComponent(searchTitle)}&y=${year}&type=${omdbType}`;
    const res = await fetch(url);
    const data = await res.json();
    
    if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
      return data.Poster;
    }
    
    // Fallback without year if not found
    const url2 = `http://www.omdbapi.com/?apikey=trilogy&t=${encodeURIComponent(searchTitle)}&type=${omdbType}`;
    const res2 = await fetch(url2);
    const data2 = await res2.json();
    if (data2.Response === "True" && data2.Poster && data2.Poster !== "N/A") {
      return data2.Poster;
    }
    
    return null;
  } catch (e) {
    console.error("Failed for", title, e);
    return null;
  }
}

async function run() {
  console.log("Fetching OMDB posters...");
  let foundCount = 0;
  for (let i = 0; i < timeline.length; i++) {
    const item = timeline[i];
    // We will refetch if missing OR if it was an iTunes one to ensure consistency (omdb has better amazon posters usually)
    console.log(`Fetching ${item.title}...`);
    const url = await fetchPoster(item.title, item.year, item.type);
    if (url) {
      item.posterUrl = url;
      foundCount++;
      console.log(`  Found: ${url}`);
    } else {
      console.log(`  Not found`);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  const newTimelineStr = JSON.stringify(timeline, null, 2)
    .replace(/"([^"]+)":/g, '$1:');

  const newContent = content.replace(timelineStr, newTimelineStr);
  fs.writeFileSync(timelinePath, newContent, 'utf8');
  console.log(`Done! Found ${foundCount}/${timeline.length} posters. Updated timeline.ts`);
}

run();
