const fs = require('fs');
const path = require('path');
const yts = require('yt-search');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
const content = fs.readFileSync(timelinePath, 'utf8');

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) {
  console.error('Could not find mcuTimeline array');
  process.exit(1);
}

const timelineStr = match[1];
let timeline = eval(timelineStr);

async function run() {
  console.log(`Fetching trailers for ${timeline.length} items...`);
  
  // To avoid getting rate limited or crashing, we do them in sequence
  for (let i = 0; i < timeline.length; i++) {
    const item = timeline[i];
    
    // Skip if already has trailerUrl
    if (item.trailerUrl) {
      console.log(`[${i+1}/${timeline.length}] Skipping ${item.title}, already has trailerUrl`);
      continue;
    }
    
    try {
      const query = `Marvel ${item.title} official trailer`;
      const r = await yts(query);
      const videos = r.videos;
      if (videos.length > 0) {
        item.trailerUrl = videos[0].url;
        console.log(`[${i+1}/${timeline.length}] ✅ Found trailer for ${item.title}: ${item.trailerUrl}`);
      } else {
        item.trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        console.log(`[${i+1}/${timeline.length}] ❌ No results for ${item.title}, falling back to search`);
      }
    } catch (e) {
      console.error(`Error fetching for ${item.title}:`, e);
      item.trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent("Marvel " + item.title + " official trailer")}`;
    }
    
    // Small delay to prevent rate limits
    await new Promise(r => setTimeout(r, 500));
  }
  
  // Write back to file
  const newTimelineStr = JSON.stringify(timeline, null, 2).replace(/"([^"]+)":/g, '$1:');
  const newContent = content.replace(timelineStr, newTimelineStr);
  
  // In timeline.ts, we need to add trailerUrl to MCUItem interface
  let finalContent = newContent;
  if (!finalContent.includes('trailerUrl?: string;')) {
    finalContent = finalContent.replace(
      'posterUrl?: string;',
      'posterUrl?: string;\n  trailerUrl?: string;'
    );
  }
  
  fs.writeFileSync(timelinePath, finalContent, 'utf8');
  console.log('✅ Done! All trailers added to timeline.ts');
}

run();
