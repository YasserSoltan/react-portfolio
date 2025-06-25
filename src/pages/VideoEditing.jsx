export default function VideoEditing() {
  return (
    <main className="bg-secondary-light-bg dark:bg-secondary-dark-bg min-h-screen">
      <div className="p-8">
        {/* <h2 className="text-4xl font-bold text-center my-8 text-white">
        Video Editing
      </h2> */}
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2 md:col-span-1 bg-black mx-auto dark:bg-zinc-500 dark:border-4 dark:border-zinc-200">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1096309296?h=588f1f7b97"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1  bg-black mx-auto dark:bg-zinc-500 dark:border-4 dark:border-zinc-200">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1096240647?h=f85ece98e7"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 bg-black mx-auto dark:bg-zinc-500 dark:border-4 dark:border-zinc-200">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1096310499?h=343bb1b392"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
            ></iframe>
            </div>
          <div className="col-span-2 md:col-span-1 bg-black mx-auto dark:bg-zinc-500 dark:border-4 dark:border-zinc-200">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1096243154?h=9974ac937b"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
