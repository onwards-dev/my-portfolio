import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const NavBar = () => {
  const homeNavClass =
    " py-6 px-3 mr-4 text-white hover:text-yellow-600 text-4xl font-bold cursive tracking widest"
  const navClass =
    "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-400"
  const activeNavClass = navClass + " text-blue-100 bg-blue-700"

  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" className={homeNavClass}>
            Onwards
          </NavLink>
          <NavLink
            to="/post"
            className={(active) =>
              active.isActive ? activeNavClass : navClass
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className={(active) =>
              active.isActive ? activeNavClass : navClass
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={(active) =>
              active.isActive ? activeNavClass : navClass
            }
          >
            About me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/BillGates"
            className="mr-4"
            target="_blank"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/@billgates"
            className="mr-4"
            target="_blank"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/williamhgates"
            className="mr-4"
            target="_blank"
            fgColor="white"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
