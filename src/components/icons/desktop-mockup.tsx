export function DesktopMockup({ children }: React.PropsWithChildren) {
  return (
    <div className="flow-root mt-10">
      <div className="-m-2 rounded-xl bg-gray-900/5 ring-2 ring-gray-900/20 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/2.5 dark:ring-2 dark:ring-white/20">
        {children}
      </div>
    </div>
  );
}
