import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi
        asperiores accusantium eius pariatur maiores suscipit tempora commodi
        cumque? Eos eveniet alias quod excepturi aut architecto. Asperiores
        perferendis aut debitis ullam voluptatem quo mollitia aliquam, voluptas
        rem veritatis dolores est, error, praesentium necessitatibus quasi earum
        reprehenderit amet facere assumenda eligendi.
      </p>
    </>
  );
};

export default About;
