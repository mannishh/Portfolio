import profileImage from "../../assets/pp.jpg";
import jobPortalImage from "../../assets/job-portal.png";
import chatapp from "../../assets/chatapp.png";

const Projects = [
  {
    title: "Online Job Portal",
    link: "https://online-job-portal-xn31.vercel.app/",
    description:
      "An online job portal system with content based filtering for job recommendation",
    image: jobPortalImage,
    tech: ["MERN", "Tailwind CSS"],
  },
  {
    title: "Real-Time Chat App",
    link: "https://realtime-chat-app-one-red.vercel.app/login",
    description:
      "A real-time chat application featuring instant messaging, presence tracking powered by WebSockets and a robust REST API.",
    image: chatapp,
    tech: ["MERN", "Tailwind CSS", "Socket.io"],
  },
];

export default Projects;
