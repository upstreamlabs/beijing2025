# JSON Content Management

This directory contains all the editable content for the GOBI 2025 website. You can update the website content by editing these JSON files without touching the code.

## 📁 File Structure

### Chinese Content (中文)
- **`HeroLinksZh.json`** - Hero section button links
- **`SellingPointsZh.json`** - Key selling points/highlights
- **`TracksZh.json`** - Conference tracks/分会场
- **`SpeakerProfilesZh.json`** - Speaker categories/嘉宾类别
- **`FAQZh.json`** - Frequently asked questions
- **`AgendaZh.json`** - Conference schedule/日程安排

### English Content
- **`HeroLinks.json`** - Hero section button links
- **`SellingPoints.json`** - Key selling points/highlights
- **`Tracks.json`** - Conference tracks
- **`SpeakerProfiles.json`** - Speaker categories
- **`FAQ.json`** - Frequently asked questions
- **`Agenda.json`** - Conference schedule

## 📝 How to Edit Content

### 1. Hero Links (Hero section buttons)
**File:** `HeroLinksZh.json` / `HeroLinks.json`

```json
[
  {
    "text": "活动结束，感谢参与",
    "link": "https://www.bagevent.com/event/gobi2025"
  }
]
```

### 2. Selling Points (Key highlights)
**File:** `SellingPointsZh.json` / `SellingPoints.json`

```json
[
  {
    "title": "可持续",
    "description": "开源作为数字公共产品的治理、资金与长期激励"
  }
]
```

### 3. Tracks (Conference tracks)
**File:** `TracksZh.json` / `Tracks.json`

```json
[
  {
    "title": "A｜AI 时代的产品设计",
    "description": "端侧/混合推理体验、智能体/工作流、可用性与安全、PLG 增长",
    "image": "/icons/design.svg"
  }
]
```

### 4. FAQ
**File:** `FAQZh.json` / `FAQ.json`

```json
[
  {
    "question": "是否提供同传？",
    "answer": "提供中文会场，同传/英文字幕视情况安排"
  }
]
```

### 5. Agenda (Schedule)
**File:** `AgendaZh.json` / `Agenda.json`

```json
[
  {
    "label": "08:30 – 09:30",
    "title": "签到 & 社交早餐",
    "text": ""
  }
]
```

## ✅ Benefits

1. **Easy Updates** - Non-technical team members can edit content
2. **Bilingual Support** - Separate files for Chinese and English
3. **Version Control** - Track content changes via Git
4. **No Code Changes** - Update content without touching Astro files
5. **Consistency** - Ensure data structure consistency

## 🔄 How Changes Work

1. Edit the JSON file
2. Save the file
3. The dev server will auto-reload
4. Content updates appear immediately

## ⚠️ Important Notes

- Keep the JSON structure intact (don't remove required fields)
- Use valid JSON syntax (check with a JSON validator if needed)
- Maintain consistent formatting
- Test after making changes

## 🎯 Next Steps

To add more content types:
1. Create a new JSON file (e.g., `Sponsors.json`)
2. Import it in the page: `import sponsors from "json/Sponsors.json"`
3. Pass it to components as props
