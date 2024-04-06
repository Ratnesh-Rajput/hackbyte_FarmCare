# FarmCare: Plant Disease Detection

<table>
<tr>
<td>
<img src="https://github.com/rahulkarda/hackhive_nextgencoders/blob/master/logo.png?raw=true" alt="Your Logo" width="auto" height="100%">
</td>
<td>
<b><i>FarmCare is a powerful web-based platform that empowers farmers to detect plant diseases by simply uploading an image. Leveraging advanced machine learning models and a user-friendly interface, FarmCare aims to provide timely and accurate disease identification, accompanied by the progression rates of potential diseases.</b>
</td>
</tr>
</table>

## Features
- **📸 Image-Based Disease Detection**:   
  Upload an image of your plant and receive instant disease diagnostics.
  
- **📚 Disease Library**:   
  Access a comprehensive guide detailing various plant diseases, their symptoms, and progression rates.

- **🤖 Advanced ML Models**:   
  Utilizing API from cutting-edge machine learning model for accurate and rapid disease identification.

- **🌾 Smart Harvesting Management**:   
  Monitor and manage harvesting activities in real-time, ensuring optimal timing and resource allocation.

- **🚜 Automated Equipment Control**:   
  Utilize IoT-enabled machinery for automated harvesting operations, reducing labor and enhancing efficiency.

- **📊 Data-Driven Insights**:   
  Access comprehensive analytics on crop yield, resource usage, and environmental factors for informed decision-making.

- **🔧 Predictive Maintenance**:   
  Implement predictive maintenance strategies for farm equipment to minimize downtime and maximize operational efficiency.


## How To Use
### 1. Visit the FarmCare platform.  
Start by capturing a clear image of a plant leaf that might be showing signs of disease. Ensure that the image is sharp and well-lit. Easily upload the image to the FarmCare platform using our user-friendly interface.
### 2. Upload an image of your plant.  
FarmCare's advanced AI technology kicks into action. The uploaded image is processed by a sophisticated machine learning model to analyze the visual characteristics of the leaf in the image, comparing them to an extensive database.
### 3. Wait for the diagnostic results and read about the disease description.
FarmCare provides you with comprehensive insights. It not only identifies the specific disease affecting your plant but also offers a detailed description of the plant, the disease itself, and recommends effective remedies.

## Technologies Behind FarmCare
- ### IoT Development:   
  - **ThingSpeak**
    - **Link**: [ThingSpeak Website](https://thingspeak.com/channels/2473517)
      
   ![Screenshot 2024-03-17 083324](https://github.com/rahulkarda/hackhive_nextgencoders/assets/114336304/002666dc-53c4-4faa-b7b5-96b93eb3ecac)  
  - **Tinkercad**
    - **Link**: [Tinkercad Website](https://www.tinkercad.com/things/a6659yNWlDT-farmvision-hack-hive)
      
      <center>
      <img src="https://github.com/rahulkarda/hackhive_nextgencoders/assets/114336304/098700d2-58bd-4dcb-88b2-a7b5739d0dbd" width="700px"></img>
      </center>
- ### Disease Prediction:   
  | Name        |    Link                                                    |
  |-------------|--------------------------------------------------------|
  |Python       |[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://python.org)|
  |TensorFlow   |[![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)](https://www.tensorflow.org)|  
  |Google Colab |[![GoogleColab](https://img.shields.io/badge/GoogleColab-%23FF6F00.svg?style=for-the-badge&logo=GoogleColab&logoColor=white)](https://colab.research.google.com)|
  |Numpy        |[![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)](https://numpy.org)|
  |Flask       |[![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.3.x)|
  
- ### Web Development:  
  | Name        |     Link                                                   |
  |-------------|--------------------------------------------------------|
  |Next.js 13       |[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/docs)|
  |TailwindCSS   |[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)|  
  |Typescript |[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)|
  |Shadcn UI        |[![shadcn/ui](https://lucide.dev/library-logos/shadcn-ui-dark.svg)](https://ui.shadcn.com/)|
  |React Query        |[![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)](https://tanstack.com/query/v3/)|

- ### Miscellaneous:   
  | Name        |  Link                                                      |
  |-------------|--------------------------------------------------------|
  |ESLint       |[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)|
  |Git/GitHub   |[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com)|  
  |Vercel |[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)|
  |npm        |[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)|


## Setup FarmCare Locally
Once you have followed the steps mentioned in [Contribution](https://github.com/rahulkarda/nextgencoders_hackhive/blob/master/Contributing.md) to fork and clone the repository, do the following to setup FarmCare locally on your PC.
```bash
cd web
```
Install all the dependencies
```bash
npm ci
```
Add the API key to the `.env` folder as mentioned in `.env.example`
Get the Plant Id API key from [here](https://web.plant.id/plant-identification-api/)
```
NEXT_PUBLIC_PLANT_ID_API_KEY = "Your API Key"
```

Run the server locally
```bash
npm run dev
```
That's it you are good to go! Looking forward to your contributions.

## Contributors
<a href="https://github.com/Ratnesh-Rajput/hackhive_nextgencoders/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Ratnesh-Rajput/hackhive_nextgencoders" />
</a>
<br />
<br />

**Thank you for using FarmCare!**
