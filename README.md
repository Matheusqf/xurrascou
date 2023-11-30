<img width="1867" alt="image" src="https://github.com/Matheusqf/xurrascou/assets/16167834/350bd095-22f1-4042-87a0-1ccd4a85bf44">


# Xurrascou: Next.js Barbecue Planner

Welcome to Xurrascou, a handy Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This application is designed to simplify the process of planning your barbecue event by allowing you to manage events, participants, their confirmation status, and individual contributions for the event.

### **👉 You can try a live demo of the app here: [xurrascou.vercel.app](https://xurrascou.vercel.app) 👈**

## Features

- **Event Management**: You can create a new barbecue event specifying the date, description, and additional notes. Each event can be viewed in detail, showing the total number of participants and the total amount collected.

- **Participant Management**: Add participants to your event, specify their names and contribution amounts. The application will automatically suggest a contribution amount based on whether the participant will be including drinks or not. This is completely customizable and can be edited.

- **Real-time updates**: The application provides real-time updates on the participant's confirmation status, allowing you to keep track of confirmed attendees.

- **Responsive Design**: The application uses a custom Hook for mobile detection, providing a seamless experience across devices.

- **Image Optimization**: This project uses [`next/image`](https://nextjs.org/docs/basic-features/image-optimization) for serving optimized images, providing a faster load time and overall better performance.

- **Custom Components**: The application features custom components like buttons, allowing you to pass additional CSS classes as props for customization. 

- **Confirmation Status**: Each participant has a confirmation status that can be toggled between confirmed and pending. 

- **Deletion of Participants**: Participants can be removed from the event with a simple click.

- **Routing**: The application utilizes Next.js built-in routing capabilities to manage different views for event listing, adding a new event, and viewing event details.

- **Pagination**: The application supports pagination in the events view, allowing for better data management and user experience.

- **Context**: The application uses React Context for state management, providing an efficient way to handle global state.

- **Event Filtering**: The application provides the ability to filter events by date.


<img width="1867" alt="image" src="https://github.com/Matheusqf/xurrascou/assets/16167834/42c4e602-efa9-4e6f-9a5b-4322d3df7743">

## Getting Started

First, clone this repository to your local machine. Then, navigate to the project directory and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

