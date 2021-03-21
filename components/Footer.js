export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto">
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-600">
              PROGRAMYSTIC © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
