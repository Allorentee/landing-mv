export default function Background() {
  // <!--https://bg.ibelick.com/ -->
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      {/* <div className="absolute top-0 z-[9999] bg-transparent h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,221,51,0.18)_0,rgba(255,221,51,0)_50%,rgba(255,221,51,0)_100%)]"></div> */}
      <div className="relative h-full w-full bg-white dark:bg-neutral-900">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#292929_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </div>
  );
}
