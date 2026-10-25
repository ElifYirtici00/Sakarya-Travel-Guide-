# Sakarya Travel Guide - Project README

## Group Members  
- **Member 1**: **Ayşem Akşit (B241202371)**  
  - **Roles**:  
    - **Frontend Development**: Implementation of responsive layouts, interactive components, and cross-browser compatibility.  
    - **Content Creation**: Researching and curating textual and visual content for destinations (Sapanca, Karasu, Adapazarı).  
    - **UI Design**: Designing intuitive interfaces, including navigation bars, rating systems, and visual hierarchy.  

- **Member 2**: **Elif Yırtıcı (B231202018)**  
  - **Roles**:  
    - **Frontend Development**: Structuring HTML/CSS frameworks and ensuring code modularity.  
    - **UX Design**: Optimizing user flows, accessibility features (e.g., alt text, keyboard navigation), and usability testing.   
    - **Research**: Gathering data on user needs, cultural landmarks, and local attractions.  

- **Member 3**: **Ömer Faruk Balık (B231202373)**  
  - **Roles**:  
    - **Frontend Development**: Implementing dynamic elements (e.g., video backgrounds, weather widgets) and **debugging layout/script issues**.  
    - **UI Design**: Styling components (buttons, cards, grids) and ensuring visual consistency.  
    - **Documentation**: Drafting project reports, README files, and presentation materials.  

- **Member 4**: **Semih Bulut (B231202029)**  
  - **Roles**:  
    - **Frontend Development**: Building reusable templates and debugging cross-device compatibility.  
    - **UI Design**: Collaborating on color schemes, typography, and image optimization.  
    - **Prototyping**: Creating wireframes and mockups for stakeholder feedback.   

---

## Project Introduction
**Sakarya Travel Guide** is designed as a 4-page website that introduces the touristic and cultural richness of three major districts of Sakarya: Adapazarı, Karasu, and Sapanca.
Each district has its own dedicated page featuring detailed information on places to visit, activities to do, and local delicacies to taste. The aim is to provide visitors with a comprehensive travel guide both visually and informatively.

Pages
1. Home Page
General introduction to Sakarya
Overview of the districts and links to their respective pages
Brief information about the city's nature, history, and cultural significance

2. Adapazarı Page
Content:
Places to Visit: Key spots such as Orhan Mosque, Kent Park, Serdivan Hill, and Çark Street
Activities to Do: City tours, nature walks, shopping, and cultural events
Local Flavors to Taste: Famous Adapazarı meatballs, pumpkin dessert, and other regional specialties
Purpose: To introduce Adapazarı's urban life, historical texture, and gastronomic richness to visitors.

3. Karasu Page
Content:
Places to Visit: Natural and historical sites like Karasu Beach, Karasu Port, and Hacıyakup Village
Activities to Do: Sea activities, beach leisure, nature walks, and fishing
Local Flavors to Taste: Fresh seafood, Karasu-style fish dishes, and local desserts
Purpose: To highlight Karasu's coastal lifestyle and marine culture, offering visitors an alternative travel route.

4. Sapanca Page
Content:
Places to Visit: Sapanca Lake, Maşukiye, Doğançay Waterfall, and nature parks
Activities to Do: Lakeside picnics, cycling tours, nature hikes, and water sports
Local Flavors to Taste: Sapanca's famous honey and dairy products, village-style breakfast, and regional sweets
Purpose: To reflect Sapanca's natural beauty and peaceful atmosphere, guiding nature and activity enthusiasts.

It features:  
- **Homepage**: Overview of key destinations (Sapanca, Karasu, Adapazarı)
- **Location Pages**: Detailed guides for each area, including activities, dining, and ratings.  
- **Technologies Used**: HTML, CSS, JavaScript.  
- **Key Features**: Responsive design, accessibility compliance, interactive elements.  
-  **Accessibility for Wheelchair Users**: Accessibility Status 
  - ✅ *Good* - Wheelchair accessible (ramps, smooth paths, wide doors)  
  - ❌ *Limited* - Difficult for wheelchairs (uneaten terrain, stairs, no ramps)  
  - Visual Indicators 
  - Inaccessible locations shown in red  
  - Accessible locations shown in green  

- *Mobile-Friendly*  
  Fully responsive on all devices

---

## Requirements Part

### 1. **User Research & Domain Analysis**
## 🛠️ Built With
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

#### User Profile:
- **Primary Users**: Tourists (local/international), ages 18–65.  
- **Characteristics**:  
  - Varied physical abilities (addressed with alt text, keyboard navigation).  
  - Mixed tech literacy (simplified UI, clear labels).  
  - Needs: Reliable transportation info, activity recommendations, safety tips.  

#### Task Analysis:
- **Goals**: Plan a trip, compare destinations, access practical info.  
- **Tasks**:  
  - Navigate between pages.  
  - View ratings (e.g., "Nature: ★★★★★").  
  - Explore activity details (e.g., hiking trails in Sapanca).  
- **Scenarios**:  
  - *Concrete Use Case*: User checks "Sapanca Accommodation Ratings" to choose a hotel.  
  - *Essential Use Case*: User selects "Karasu" to view beach activities.  

#### Requirements Gathering:
- **Four Psychological Principles**:  
  1. **Consistency**: Uniform navigation across all pages.  
  2. **Recognition Over Recall**: Star ratings for quick comparisons.  
  3. **Structured Layout**: Grid-based activity cards.  
  4. **Feedback**: Hover effects on buttons and links.  
- **Three Experience Principles**:  
  - **Visibility**: Clear CTAs (e.g., "Explore Karasu").  
  - **Affordance**: Button shapes indicate interactivity.  
  - **Feedback**: Loading animations for videos/images.  

---

## Design Part

### 1. **Conceptual Design**
#### Content Diagram:
- **Containers**: Homepage (Main), Sapanca, Karasu, Adapazarı.  
- **Links**: Navigation bar with bidirectional links between all pages.  
- **Objects**: Activity cards, ratings, images, maps.  

### 2. **Design Principles**
- **Simplicity**: Minimalist layout with focused content sections.  
- **Structure**: Hierarchical information flow (e.g., homepage → details).  
- **Consistency**: Reusable components (navigation, footer).  
- **Tolerance**: Error-free links, fallback text for images.  

### 3. **Human-Action Cycle Critique**
- **Goal Formation**: Clear headings guide users (e.g., "WHAT TO DO AND WHERE?").  
- **Execution**: Intuitive navigation reduces cognitive load.  
- **Evaluation**: Ratings and descriptions help users assess options.  

### 4. **Interaction Styles & Controls**
- **Navigation**: Top-menu tabs for seamless page switching.  
- **Buttons**: Styled CTAs (e.g., "CHECK YOUR TRIP!").  
- **Cards**: Flex layout for activity comparisons.  
- **Rationale**: Menus reduce clutter; cards enable quick scanning.  

---

## Deficiencies & Future Work
- **Current Limitations**:  
  - No booking system (beyond project scope).  
  - Limited user customization (e.g., saving preferences).  
- **Improvements**: Add multilingual support, Travel Buddy Feature: In the future, the platform could include a feature that allows users to find and connect with potential travel buddies based on shared destinations, interests, and travel dates. This would enhance the social aspect of the platform and help users create more engaging and enjoyable travel experiences.  

---

## Project Files
- **Code**: HTML, Styles,  Main page, Scripts files.  
- **Assets**: Images, videos.  
- **Report**: This README.  

---

**© 2025 Sakarya Travel Guide Team**  
*All rights reserved. No templates were used.*
