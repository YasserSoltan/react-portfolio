import { Link } from "react-router";
import editing from "../assets/images/video-editing.png";

export default function Home() {
  return (
    <main className="home flex flex-col md:flex-row gap-3 p-8 bg-secondary-light-bg dark:bg-secondary-dark-bg min-h-screen">
      <Link to={"/video-editing"}>
        <section>
          <div className="bg-card-light-link dark:bg-card-dark-link m-5 rounded-4xl">
            <img src={editing} alt="video editing image" />
          </div>
          <h2 className="text-4xl font-bold text-center text-black-text dark:text-white-text">
            Video Editing
          </h2>
        </section>
      </Link>
      <Link to={"/motion-graphics"}>
        <section className="">
          <div className="bg-card-light-link dark:bg-card-dark-link m-5 rounded-4xl">
            <img src={editing} alt="video editing image" />
          </div>
          <h2 className="text-4xl font-bold text-center text-black-text dark:text-white-text">
            Motion Graphics
          </h2>
        </section>
      </Link>
    </main>
  );
}
