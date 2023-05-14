# Xurrascou: Next.js Barbecue Planner

Welcome to Xurrascou, a handy Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This application is designed to simplify the process of planning your barbecue event by allowing you to manage events, participants, their confirmation status, and individual contributions for the event.

## Features

1. **Event Management**: You can create a new barbecue event specifying the date, description, and additional notes. Each event can be viewed in detail, showing the total number of participants and the total amount collected.

2. **Participant Management**: Add participants to your event, specify their names and contribution amounts. The application will automatically suggest a contribution amount based on whether the participant will be including drinks or not. This is completely customizable and can be edited.

3. **Real-time updates**: The application provides real-time updates on the participant's confirmation status, allowing you to keep track of confirmed attendees.

4. **Responsive Design**: The application uses a custom Hook for mobile detection, providing a seamless experience across devices.

5. **Image Optimization**: This project uses [`next/image`](https://nextjs.org/docs/basic-features/image-optimization) for serving optimized images, providing a faster load time and overall better performance.

6. **Custom Components**: The application features custom components like buttons, allowing you to pass additional CSS classes as props for customization. 

7. **Confirmation Status**: Each participant has a confirmation status that can be toggled between confirmed and pending. 

8. **Deletion of Participants**: Participants can be removed from the event with a simple click.

9. **Routing**: The application utilizes Next.js built-in routing capabilities to manage different views for event listing, adding a new event, and viewing event details.

10. **Pagination**: The application supports pagination in the events view, allowing for better data management and user experience.

11. **Context**: The application uses React Context for state management, providing an efficient way to handle global state.

12. **Event Filtering**: The application provides the ability to filter events by date.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.