
# CampusHero – Campus Lost & Found System

**Lost something on campus? Don’t panic — we’ve got your back.**

CampusHero lets you report lost or found items and helps reunite them with their rightful owners using smart matching and a helpful student community.

---

## Use Cases

- **Add Lost Item**  
  Upload a photo and description of what you lost, including where you last saw it.

- **Add Found Item**  
  Post an item you've found that might belong to someone else.

- **Claim Lost & Found Item**  
  Claim a listed item if you believe it’s yours.

- **Indicate Found for Lost Post**  
  If you found something already reported as lost, you can mark it as found.

- **Confirm Collection**  
  Security or the claimant can confirm that the item has been collected.

---
<img src="https://github.com/lethabomaepa11/campushero/blob/master/docs/CampusLost%26Found.drawio.png"/>

## How It Works

1. Visit the site and report a lost item.
2. Fill in:
   - Name
   - Description
   - Last known location
   - Optional photo
3. System shows similar found items.
4. If no match, proceed to post.
5. If a match is later posted, you’ll get an **email notification**.
6. When someone marks your item as found, you get full details on how to retrieve it.

---

## AI-Powered Features

- **Smart Matching**: See similar items already posted as found.
- **Easy Reporting**: Post your lost item in seconds.
- **Instant Notifications**: Get an email when a potential match is posted.
- **Trusted Returns**: Found items can be linked to lost item reports with retrieval details shared.

> Whether you’ve lost it or found it — be a hero, join the community, and help items find their way home.

---

## Data Entities

```text
item(id, photo, title, description, found?)
lost_item(item_id, lost_location)
found_item(item_id, found_location, current_location)
claimed_item(item_id, user_email, user_tel)
```

---

##  Leaderboard Ideas

### 1. **Top Contributors**
- Most found item reports
- Most successfully claimed items
- Most matches helped

### 2. **Top Honest Students / Trusted Users**
- Most verified claims and returns
- Consistent, trustworthy behavior
- “Verified” badge after multiple good actions

### 3. **Hall of Fame (Great People)**
- Returned valuable items
- Helped identify owners
- Long-term community contributors

---

##  Gamification Features

###  Points System
- +10: Found and uploaded an item  
- +20: Item successfully claimed  
- +5: Helped indicate a match  
- -20: False claim/misuse (with moderation)

###  Badges
- **Finder Pro** – Found 5 items  
- **Campus Hero** – Matched 3 items  
- **Honest Soul** – 5 verified returns  
- **Helping Hand** – Helped others match

###  Rewards (Optional)
- Monthly top users:
  - Campus store voucher
  - Digital “Wall of Honor” highlight
  - Certificate of appreciation

---

##  Leaderboard Display Suggestions

- **Filters**: This Week | This Month | All Time  
- **Sort by**: Points | Items Found | Verified Claims  
- **Anonymous Mode Toggle**  
- **User Cards**:
  - Name
  - Avatar
  - Points
  - Badges

---

##  Color Palette

### Primary Colors
- **Indigo Blue**: `#3F51B5` – Trustworthy, professional
- **Sky Blue**: `#03A9F4` – Youthful, clean

### Accent Colors
- **Gold/Amber**: `#FFC107` – Hero badges, highlights
- **Soft Green**: `#4CAF50` – Successful returns
- **Coral Red**: `#F44336` – Alerts or urgency

### Neutrals
- **White**: `#FFFFFF` – Clean layouts
- **Light Grey**: `#F5F5F5` – Backgrounds
- **Dark Grey**: `#333333` – Main text
- **Muted Grey**: `#757575` – Subtitles, descriptions


### UI Usage Guide
- Use **Indigo Blue** for headers and primary buttons.
- Use **Gold** for top contributor highlights.
- Use **Sky Blue** for CTA buttons like “Claim Item.”
- Use **Soft Green** for “Item Found!” messages.
- Use **Coral Red** for urgent alerts, subtly.

### Initial Design
<img src="https://github.com/lethabomaepa11/campushero/blob/master/docs/PeerLostAndFound.png"/>
