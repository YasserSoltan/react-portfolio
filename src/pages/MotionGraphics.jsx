export default function MotionGraphics() {
  return (
    <main className="bg-secondary-light-bg dark:bg-secondary-dark-bg">
      <div className="p-8">
        {/* <h2 className="text-4xl font-bold text-center my-8 text-white">
        Motion Graphics
        </h2> */}
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2 md:col-span-1 my-6">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/834135251?h=388270354a"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              className="w-full rounded-2xl"
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 rounded-2xl my-6">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/122375452?h=53ea5f7644"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              className="w-full rounded-2xl"
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 my-6">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/27246366?h=75fabdf419"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              className="w-full rounded-2xl"
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 my-6">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/970075397?h=75935cd464"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              className="w-full rounded-2xl"
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 my-6">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/108018156?h=c7bb7b756b"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              className="w-full rounded-2xl"
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 my-6">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1069728452?h=2305d9d486"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              className="w-full rounded-2xl"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
