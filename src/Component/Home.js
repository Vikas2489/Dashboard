import { NavLink } from 'react-router-dom';
function Home(props) {
  return (
    <div className="bg-[#D1EEEE] w-screen pl-4 py-4">
      <h3 className="pl-4 text-[#323332] text-l font-semibold">
        🚀 Welcome To HomePage!
      </h3>
      <div className="mt-4">
        <NavLink to="/articles">
          <button
            className="rounded hover:underline inline-block mx-5 px-6 bg-white  py-2 py-3"
            type="button"
          >
            Article Page
          </button>
        </NavLink>
        <NavLink to="/books">
          <button
            className="hover:underline transform-all rounded inline-block mx-5 px-6 bg-white py-2 py-3"
            type="button"
          >
            Books Page
          </button>
        </NavLink>
        <NavLink to="/people">
          <button
            className="hover:underline rounded inline-block mx-5 px-6 bg-white py-2 py-3"
            type="button"
          >
            People Page
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
