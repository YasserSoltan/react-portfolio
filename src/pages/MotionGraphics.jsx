export default function MotionGraphics() {
  return (
    <main className="bg-secondary-light-bg dark:bg-secondary-dark-bg min-h-screen">
      <div className="p-8">
        {/* <h2 className="text-4xl font-bold text-center my-8 text-white">
        Motion Graphics
        </h2> */}
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2 md:col-span-1 my-6 bg-black mx-auto dark:bg-zinc-500 dark:border-4 dark:border-zinc-200">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1096245115?h=df8b7e5a5d"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 my-6 bg-black mx-auto dark:bg-[#DAD6CD] dark:border-4 dark:border-zinc-200">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1096250193?h=f8b08ad420"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
